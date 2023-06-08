import { useEffect } from "react";
import "./Button.css"

const Button = ({ data, addToBasket }) => {
  const putToBasket = () => {
    addToBasket(data);
  }

  return (
    <div className="product-actions">
      <button
        className="add-to-basket-button"
        key={data.id}
        onClick={putToBasket}
      >
        Add to Basket
      </button>
    </div>
    
  );
};

export default Button;
