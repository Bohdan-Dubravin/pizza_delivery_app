interface MenuItemProps {
  imgPath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

const MenuItem = ({
  imgPath,
  weight,
  title,
  ingredients,
  price,
}: MenuItemProps) => {
  return (
    <div className="w-[384px] shadow-xl rounded-2xl overflow-hidden bg-white">
      <div className="w-full h-[247px] relative ">
        <img
          className="object-cover w-full h-[247px]"
          src={imgPath}
          alt="pizza-image"
        />
        <span className="absolute text-sm px-2 rounded-[32px] bottom-[6px] right-[12px] bg-gray-900/50 text-white">
          {weight} g
        </span>
      </div>
      <div className="p-8 ">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold"> {price} $</span>
      </div>
    </div>
  );
};

export default MenuItem;
