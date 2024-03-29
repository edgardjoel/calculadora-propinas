import { MenuItems } from "../types/types";

type menuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};
const MenuItem = ({ item, addItem }: menuItemProps) => {
  const { name, price } = item ?? {};
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between"
      onClick={() => {
        addItem(item);
      }}
    >
      <p>{name}</p>
      <p className="font-black">${price}</p>
    </button>
  );
};

export default MenuItem;
