import { useEffect, useState } from "react";
import UserCard from "../components/usercard";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

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
