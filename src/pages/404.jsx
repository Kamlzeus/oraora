import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-2xl mt-2">Страница не найдена</p>
      <Link
        to="/users"
        className="block mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:shadow-lg"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
