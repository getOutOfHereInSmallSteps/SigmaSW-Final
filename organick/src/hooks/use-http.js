import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { db } from '../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

import { setProducts } from '../store';

const useHttp = () => {
  const [productsData, setProductsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getDocs(collection(db, 'products')).then(querySnapshot => {
      const data = [];
      querySnapshot.forEach(el => data.push(el.data()));
      setProductsData(data.sort((a, b) => b.discount - a.discount));
    });
  }, []);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch, productsData]);
};

export default useHttp;
