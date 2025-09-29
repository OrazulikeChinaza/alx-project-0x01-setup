import React, { useState } from "react";
import Button from "@/components/common/Button";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleSaveUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Users</h1>

      <Button label="Add User" onClick={() => setIsModalOpen(true)} />

      {/* Render Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveUser}
      />

      <ul className="mt-6">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded mb-2">
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UsersPage;
