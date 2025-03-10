import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-lg text-white p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Oraora</h1>
        <Link
          to="/users"
          className="px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
        >
          📃 Список пользователей
        </Link>
      </nav>
    </header>
  );
};

export default Header;
