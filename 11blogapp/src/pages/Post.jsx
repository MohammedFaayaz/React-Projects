import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-12 px-4">
      <Container>
        <div className="w-full flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-blue-400 animate-fadeIn">
          {/* Featured Image */}
          <div className="relative w-full max-w-3xl">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg w-full shadow-md transition-transform transform hover:scale-105"
            />
            {isAuthor && (
              <div className="absolute top-4 right-4 flex space-x-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="hover:scale-105 transition">
                    ✏️ Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  onClick={deletePost}
                  className="hover:scale-105 transition"
                >
                  🗑️ Delete
                </Button>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="w-full max-w-3xl text-center mt-6">
            <h1 className="text-4xl font-bold text-white animate-slideIn">{post.title}</h1>
            <div className="text-lg text-gray-300 mt-4 bg-white/10 p-4 rounded-lg">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
