// import style from "../styles/product.css"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/carts/carts.slice";

function Product({ id, img, title, price }) {
  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  const handleAddToCart = (img, title, price) => {
    
  };

  useEffect(() => {
    console.log(store);
  }, []);

  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        marginTop: "20px",
      }}
    >
      <div className="img-div">
        <img
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
          src={img}
          alt=""
        />
      </div>
      <div style={{ height: "200px", width: "50%", margin: "auto" }}>
        <h3 style={{ fontSize: "20px", color: "teal" }}>{title}</h3>
        <h5 style={{ fontSize: "20px" }}>$ {price}</h5>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "teal",
            color: "white",
            fontSize: "15px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Buy Now
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "teal",
            color: "white",
            fontSize: "15px",
            cursor: "pointer",
            border: "none",
          }}
          onClick={() => handleAddToCart(img, title, price)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
