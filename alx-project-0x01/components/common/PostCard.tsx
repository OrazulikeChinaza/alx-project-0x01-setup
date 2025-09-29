import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <h2 className="text-xl font-bold">Post Title</h2>
      <p className="text-gray-600">This is a sample post content.</p>
    </div>
  );
};

export default PostCard;
