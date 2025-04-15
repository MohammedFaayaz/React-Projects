import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    }
  }, [slug, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600 py-12 px-4">
      <Container>
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md shadow-lg p-6 rounded-lg animate-fadeIn">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
             Edit Your Post
          </h2>

          {loading ? (
            <p className="text-white text-center text-lg animate-pulse">Loading...</p>
          ) : (
            <PostForm post={post} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default EditPost;
