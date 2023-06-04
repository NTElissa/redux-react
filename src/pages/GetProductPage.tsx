import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { GetProduct } from '../redux/action/getProductAction';

function ProductForm() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <img src={product.picture_urls[0]} alt={product.name} />
              <p>Stock: {product.instock}</p>
              <p>Availability: {product.available ? 'Available' : 'Out of Stock'}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductForm;
