import { useMemo, useState } from "react";
import { MenuItems, OrderItem } from "../types/types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: MenuItems) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const updateOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        }
        return orderItem;
      });
      setOrder(updateOrder);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItems["id"]) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(newOrder);
  };

  const subtotalAmount = useMemo(
    () =>
      order.reduce(
        (total, orderItem) => total + orderItem.price * orderItem.quantity,
        0
      ),
    [order]
  );

  const tipAmount = useMemo(() => tip * subtotalAmount, [tip, subtotalAmount]);

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    addItem,
    removeItem,
    order,
    subtotalAmount,
    setTip,
    tipAmount,
    totalAmount,
    placeOrder,
  };
};

export default useOrder;
