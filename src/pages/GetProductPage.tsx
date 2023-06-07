import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../redux/action/getProductAction";

function GetProducts() {
  const dispatch = useDispatch();
  // const status = useSelector(state => state.product.status);
  // const error = useSelector(state => state.product.Error);
  const { product, error, status } = useSelector((state: any) => state.product);

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  console.log("product:", product);
  return (
    <div>
      <div>
        {product.products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <img src={product.picture_urls[0]} alt={product.name} />
            <p>Stock: {product.instock}</p>
            <p>
              Availability: {product.available ? "Available" : "Out of Stock"}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetProducts;
