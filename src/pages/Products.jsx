import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../features/products/products";

function Products() {
  const { loading, error, products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  let data = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      {products?.map((e) => (
        <Product key={e.id} id={e.id} img={e.image} price={e.price} title={e.title} />
      ))}
    </div>
  );
}

export default Products;
