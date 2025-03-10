import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showUsername, setShowUsername] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user)
    return <p className="text-center text-xl text-white">грузим-грузим...</p>;

  return (
    <div className="w-screen h-screen flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-xl shadow-lg text-center">
        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          alt={user.name.firstname}
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        />
        <h2 className="text-3xl font-bold mt-4">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <div className="mt-4 text-left space-y-2">
          <p>
            <span className="font-bold">🏠 Адрес:</span> {user.address.street},{" "}
            {user.address.number}, {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            <span className="font-bold">📞 Телефон:</span> {user.phone}
          </p>
          <p>
            <span className="font-bold">🌍 Геолокация:</span>{" "}
            {user.address.geolocation.lat}, {user.address.geolocation.long}
          </p>
          <p>
            <span className="font-bold">👤 Имя пользователя:</span>
            {showUsername ? ` ${user.username}` : " ********"}
            <button
              className="ml-2 text-blue-400 hover:underline"
              onClick={() => setShowUsername(!showUsername)}
            >
              {showUsername ? "Скрыть" : "Показать"}
            </button>
          </p>
          <p>
            <span className="font-bold">🔒 Пароль:</span>
            {showPassword ? ` ${user.password}` : " ********"}
            <button
              className="ml-2 text-blue-400 hover:underline"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Скрыть" : "Показать"}
            </button>
          </p>
        </div>

        <Link
          to="/users"
          className="block mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:shadow-lg"
        >
          Назад к списку
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
