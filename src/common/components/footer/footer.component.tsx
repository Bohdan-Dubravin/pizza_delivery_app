const MenuList = () => {
  return (
    <div className=" mx-auto bg-gray-900 pt-12 pb-8">
      <div className="mb-4 px-12">
        <span className="uppercase font-bold text-sm text-zinc-500">
          Contacts
        </span>
      </div>
      <div className="mb-8 px-12">
        <ul className="text-gray-400 text-sm font-bold ">
          <li className="hover:underline hover:text-gray-300">
            <a href="tel:+380441234567">044 123 45 67</a>
          </li>
          <li className="hover:underline hover:text-gray-300">
            <a href="email:info@pizzastack.app">info@pizzastack.app</a>
          </li>
        </ul>
      </div>
      <div className="pt-8 border-t border-zinc-500 ">
        <a className="text-xl font-semibold text-white px-12" href="/">
          🍕 Pizza my
        </a>
      </div>
    </div>
  );
};

export default MenuList;
