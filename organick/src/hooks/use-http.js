import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { db } from '../firebase/firebase';
import {
  collection,
  orderBy,
  query,
  limit,
  getDocs,
  startAfter,
  where,
} from 'firebase/firestore';

import { setProducts } from '../store';

const getDocumentSnapshot = async elementId => {
  const docRef = await getDocs(
    query(collection(db, 'products'), where('id', '==', `p${elementId}`))
  );
  return docRef.docs[0];
};

const useHttp = pageIndex => {
  const [productsData, setProductsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const productsPage = useSelector(state => state.products.pages[pageIndex]);

  useEffect(() => {
    if (productsPage) {
      setProductsData(productsPage);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    getDocumentSnapshot(pageIndex * 8)
      .then(last =>
        getDocs(
          query(
            collection(db, 'products'),
            orderBy('discount', 'desc'),
            startAfter(last || ''),
            limit(8)
          )
        )
      )
      .then(querySnapshot => {
        const products = querySnapshot.docs.map(doc => doc.data());
        dispatch(setProducts({ products, id: pageIndex }));
        setProductsData(products);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return { productsData, isLoading };
};

export default useHttp;
