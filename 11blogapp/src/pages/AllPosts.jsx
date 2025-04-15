import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600 py-12 px-4">
      <Container>
        <h2 className="text-4xl font-bold text-white text-center mb-8 animate-fadeIn">
          Latest Posts 
        </h2>
        
        {posts.length === 0 ? (
          <div className="text-center text-white text-lg mt-10 animate-fadeIn">
             No posts available! Be the first to create one.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {posts.map((post) => (
              <div
                className="p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
                key={post.$id}
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
