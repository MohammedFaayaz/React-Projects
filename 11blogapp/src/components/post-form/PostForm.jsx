import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import appwriteService from "../../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
  }, []);

  useEffect(() => {
    watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Left Section - Title, Slug, and Content */}
      <div className="md:col-span-2 space-y-4">
        <Input label="Title" placeholder="Title" className="w-full" {...register("title", { required: true })} />
        <Input
          label="Slug:"
          placeholder="Slug"
          className="w-full"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content:" name="content" control={control} defaultValue={getValues("content")} />
      </div>

      {/* Right Section - Image Upload and Status */}
      <div className="space-y-4">
        <Input
          label="Featured Image"
          type="file"
          className="w-full border border-gray-300 p-2 rounded-lg"
          accept="image/png, image/jpg, image/jpeg"
          {...register("image", { required: !post })}
        />

        {/* Show preview if updating */}
        {post && (
          <div className="w-full flex justify-center">
            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="w-full max-w-xs rounded-lg shadow-md" />
          </div>
        )}

        <Select options={["active", "inactive"]} label="Status" className="w-full" {...register("status", { required: true })} />

        <Button type="submit" bgColor={post ? "bg-green-500" : "bg-blue-600"} className="w-full text-white font-semibold py-2">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
