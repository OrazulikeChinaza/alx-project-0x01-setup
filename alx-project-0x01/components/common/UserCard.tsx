import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-lg font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <p className="mt-2 text-gray-700">{user.email}</p>
      <p className="text-gray-700">{user.phone}</p>
      <p className="text-gray-700">{user.website}</p>

      <div className="mt-3">
        <h3 className="font-semibold">Company</h3>
        <p>{user.company.name}</p>
        <p className="text-sm text-gray-500">{user.company.catchPhrase}</p>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold">Address</h3>
        <p>
          {user.address.suite}, {user.address.street}, {user.address.city}
        </p>
        <p className="text-sm text-gray-500">Zip: {user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
