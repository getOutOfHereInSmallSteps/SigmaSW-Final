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
} from 'firebase/firestore';

import { setProducts } from '../store';

const useHttp = pageIndex => {
  const [lastProduct, setLastProduct] = useState(null);
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
    console.log('LOADING...');
    setIsLoading(true);

    console.log('LAST PRODUCT' + lastProduct);

    // const q = lastProduct
    //   ? query(
    //       collection(db, 'products'),
    //       orderBy('discount', 'desc'),
    //       startAfter(lastProduct),
    //       limit(8)
    //     )
    //   : query(
    //       collection(db, 'products'),
    //       orderBy('discount', 'desc'),
    //       limit(8)
    //     );
    const q = query(
      collection(db, 'products'),
      orderBy('discount', 'desc'),
      startAfter(lastProduct ? lastProduct : ''),
      limit(8)
    );

    getDocs(q)
      .then(querySnapshot => {
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        console.log(lastVisible);
        if (lastVisible) {
          setLastProduct(lastVisible);
        }

        const products = querySnapshot.docs.map(doc => doc.data());
        dispatch(setProducts({ products, id: pageIndex }));
        setProductsData(products);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [lastProduct]);

  return { productsData, isLoading };
};

export default useHttp;
