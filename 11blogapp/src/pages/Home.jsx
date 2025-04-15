import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
        <Container>
          <div className="max-w-xl mx-auto bg-blue-950/80 text-white text-center p-10 rounded-2xl shadow-xl backdrop-blur-lg border border-blue-400 animate-fadeIn">
            <h1 className="text-3xl font-semibold">🔒 Login to Read Posts</h1>
            <p className="text-lg mt-4 opacity-80">Unlock exclusive content by signing in.</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-medium rounded-lg shadow-md">
              Login Now
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-12 px-4">
      <Container>
        <h1 className="text-4xl font-bold text-white text-center mb-10 animate-fadeInUp">
          📝 Latest Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div 
              key={post.$id} 
              className="transform hover:scale-105 transition-all duration-300"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
