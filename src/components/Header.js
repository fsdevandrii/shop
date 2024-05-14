import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Сумма заказа: {new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <p>Товары не добавлены</p>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">Flower staff</span>
        <ul className="nav">
          <li className="item">О нас</li>
          <li className="item">Контакты</li>
          <li className="item">Кабинет</li>
        </ul>
        <FaShoppingBag
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
