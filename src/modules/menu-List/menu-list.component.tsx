import MenuItem from '../menu/menu-item/menu-item.component';
import { Pizza } from '../menu/types/pizzaType';

interface MenuListProps {
  items: Pizza[];
}

const MenuList = ({ items }: MenuListProps) => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-wrap gap-10  bg-white">
      {items.map(({ image, id, ...pizza }) => {
        return <MenuItem {...pizza} imgPath={`/pizza/${image}`} key={id} />;
      })}
    </div>
  );
};

export default MenuList;
