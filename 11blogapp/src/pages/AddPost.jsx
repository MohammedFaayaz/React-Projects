import React from "react";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

function AddPost() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 p-6">
      <Container>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg transform transition-all duration-500 hover:scale-105 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Create a New Post 
          </h2>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
