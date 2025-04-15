import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js";

function PostCard({ $id, title, featuredImage }) {
  // Ensure the image URL is properly generated
  const imageSrc = featuredImage
    ? appwriteService.getFilePreview(featuredImage) // Ensure this function works
    : "https://via.placeholder.com/400x300?text=No+Image";

  console.log(`Post ID: ${$id}, Image URL:`, imageSrc); // Debugging

  return (
    <Link to={`/post/${$id}`} className="block">
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        
        {/* Image Section */}
        <div className="w-full flex justify-center mb-4">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="rounded-xl w-full h-48 object-cover"
            onError={(e) => {
              console.error("Image failed to load:", imageSrc);
              e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
            }}
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-200">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
