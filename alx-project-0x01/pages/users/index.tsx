import React, { useState } from "react";
import Button from "@/components/common/Button";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const posts = users;
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {posts.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: { users },
  };
}

export default Users;
