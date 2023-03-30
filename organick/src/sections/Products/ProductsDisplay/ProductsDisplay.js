import React from 'react';

import Heading from '../../../components/Typography/Heading';
import Subheading from '../../../components/Typography/Subheading';
import Container from '../../../components/UI/Container';
import ProductBackdrop from '../ProductsForm/ProductBackdrop';
import ProductForm from '../ProductsForm/ProductForm';
import Product from './Product';
import Button from '../../../components/UI/Button';

import styles from './ProductsDisplay.module.scss';

import { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

const subheadingStyles = {
  textAlign: 'center',
  marginBottom: '1rem',
};
const headingStyles = {
  textAlign: 'center',
  marginBottom: '4rem',
};

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
  marginBottom: '4.8rem',
};

const ProductsDisplay = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [isShownMore, setIsShownMore] = useState(false);

  useEffect(() => {
    getDocs(collection(db, 'products')).then(querySnapshot => {
      setProductsData([]);
      querySnapshot.forEach(el =>
        setProductsData(prevState => [...prevState, el.data()])
      );
      setProductsData(prevState =>
        prevState.sort((a, b) => b.discount - a.discount)
      );
    });
  }, []);

  const selectItemHandler = productId => {
    const selectedItem = productsData.find(element => element.id === productId);
    setActiveItem(selectedItem);
  };

  const openModalHandler = () => {
    setIsModalActive(true);
  };

  const closeModalHandler = e => {
    e.preventDefault();
    setIsModalActive(false);
    setActiveItem(null);
  };

  const productsPageOne = productsData.slice(0, productsData.length / 2);
  const productsPageTwo = productsData.slice([productsData.length / 2]);

  const toggleShowMoreHandler = e => {
    e.preventDefault();
    setIsShownMore(prevState => !prevState);
  };

  return (
    <div className={styles.categories}>
      <Subheading style={subheadingStyles}>Categories</Subheading>
      <Heading style={headingStyles}>Our Products</Heading>

      <Container style={containerStyles}>
        {productsPageOne.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
            onSelectItem={selectItemHandler}
            key={product.id}
            id={product.id}
            link={product.link}
          />
        ))}
        {isShownMore &&
          productsPageTwo.map(product => (
            <Product
              type={product.type}
              name={product.name}
              price={product.price}
              discount={product.discount}
              onOpenModal={openModalHandler}
              onSelectItem={selectItemHandler}
              key={product.id}
              id={product.id}
              link={product.link}
            />
          ))}
      </Container>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={toggleShowMoreHandler}>
          {isShownMore ? 'Hide All' : 'Load More'}
        </Button>
      </div>

      {isModalActive && (
        <React.Fragment>
          <ProductForm
            selectedProduct={activeItem}
            onClose={closeModalHandler}
          />
          <ProductBackdrop onClose={closeModalHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductsDisplay;
