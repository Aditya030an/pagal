import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

export default function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      setErrorMsg("Blog not found");
      setBlog(null);
    } else {
      setBlog(data);
    }

    setLoading(false);
  };

  // 🔹 Loading state
  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading blog...
      </section>
    );
  }

  // 🔹 Error state
  if (!blog) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg text-gray-600">{errorMsg}</p>
        <Link
          to="/blogs"
          className="text-blue-600 font-medium hover:underline mt-4 inline-block"
        >
          ← Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto font-[lato]">
      {/* Back */}
      <Link
        to="/blogs"
        className="text-sm text-gray-500 hover:text-blue-600 transition"
      >
        ← Back to Blogs
      </Link>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mt-6 leading-tight"
      >
        {blog.title}
      </motion.h1>

      {/* Meta */}
      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">
          {blog.tag}
        </span>
        <span>
          {new Date(blog.created_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-8" />

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap"
      >
        {blog.content}
      </motion.article>
    </section>
  );
}
