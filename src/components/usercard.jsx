import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="p-5 border rounded-xl shadow-lg bg-gray-900 text-white transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name.firstname}
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold text-center mt-3">
        {user.name.firstname} {user.name.lastname}
      </h2>
      <p className="text-center text-gray-400">{user.email}</p>
      <p className="text-center text-gray-500">
        {user.address.city}, {user.address.street}
      </p>
      <Link
        to={`/users/${user.id}`}
        className="block text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 mt-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:shadow-lg"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default UserCard;
