import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import BlogForm from "./BlogForm.jsx";
import { supabase } from "../lib/supabase";

const posts = [
  {
    id: 1,
    title: "Designing calm digital experiences",
    excerpt:
      "Why clarity, restraint, and intention matter more than trends in modern web design.",
    date: "Aug 12, 2025",
    category: "Design",
  },
  {
    id: 2,
    title: "How performance shapes user trust",
    excerpt:
      "Fast websites don’t just convert better — they feel more trustworthy.",
    date: "Jul 28, 2025",
    category: "Development",
  },
  {
    id: 3,
    title: "Brand systems that scale",
    excerpt:
      "A practical look at building brand systems that grow with your business.",
    date: "Jul 10, 2025",
    category: "Branding",
  },
];

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [loadingBlogs, setLoadingBlogs] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const isAdmin = user?.email === import.meta.env.VITE_ADMIN_EMAIL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoadingBlogs(true);
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    setBlogs(data || []);
    setLoadingBlogs(false);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this blog permanently?")) {
      await supabase.from("blogs").delete().eq("id", id);
      fetchBlogs();
    }
  };
  if (loadingBlogs) {
    return <div>Loading....</div>;
  }
  return (
    <section className="bg-[#F4F9FC] min-h-screen">
      {/* HERO */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pt-36 pb-28">
        <p className="text-xs tracking-[0.35em] uppercase text-[#0E86D4]">
          Journal
        </p>

        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.05] font-medium text-[#003060]">
          Thoughts on design,
          <br />
          technology & clarity.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-[#055C9D]">
          Insights from our studio — exploring how calm design and thoughtful
          engineering create meaningful digital experiences.
        </p>
      </div>

      {/* FEATURED */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 mb-32">
        <div className="border border-[rgba(0,48,96,0.12)] rounded-3xl p-10 sm:p-14 bg-white/70 backdrop-blur-xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#0E86D4]">
            Featured
          </p>

          <h2 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-light text-[#003060]">
            Designing calm digital experiences
          </h2>

          <p className="mt-6 max-w-2xl text-[#055C9D] text-lg">
            A deeper look into how restraint, hierarchy, and clarity shape
            premium digital products — and why calm is the new competitive
            advantage.
          </p>

          <Link
            to="/blog/designing-calm-digital-experiences"
            className="group inline-flex items-center gap-4 mt-10 text-lg font-medium text-[#003060]"
          >
            Read article
            <span className="h-[2px] w-12 bg-[#0E86D4] transition-all duration-300 group-hover:w-24" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Insights & Articles
        </div>

        {isAdmin && (
          <div
            onClick={() => {
              setSelectedBlog(null);
              setShowForm(true);
            }}
            className="mt-6 md:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
          >
            + Publish Blog
          </div>
        )}
      </div>

      {/* LIST */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {blogs.length === 0 ? (
            <div>No Blogs</div>
          ) : (
            blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Admin Actions */}
                {isAdmin && (
                  <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                    >
                      <FiEdit className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                    >
                      <FiTrash2 className="text-red-600" />
                    </button>
                  </div>
                )}
                <p className="text-xs tracking-[0.3em] uppercase text-[#0E86D4]">
                  {blog.category}
                </p>

                <h3 className="mt-4 text-xl font-medium text-[#003060] leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-4 text-[#055C9D] leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-[#055C9D]">{blog.date}</span>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="relative text-sm font-medium text-[#003060]"
                  >
                    Read
                    <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#0E86D4] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      {/* Blog Form Modal */}
      {showForm && (
        <BlogForm
          editData={selectedBlog}
          fetchBlogs={fetchBlogs}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
}
