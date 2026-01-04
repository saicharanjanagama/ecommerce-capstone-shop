import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const addOrder = order => {
    const updated = [...orders, order];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const removeOrder = id => {
    const updated = orders.filter(o => o.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
    };

    const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
    };


  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
