import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Users</h1>
      <Button label="Click Me" />
    </main>
  );
};

export default UsersPage;
