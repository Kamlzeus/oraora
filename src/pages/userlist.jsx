import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/async/usersAsync";
import UserCard from "../components/usercard";

const UsersList = () => {
  const dispatch = useDispatch();
  const { list: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p className="text-white text-xl">Загрузка...</p>;
  if (error) return <p className="text-red-500 text-xl">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <div className="max-w-7xl w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
