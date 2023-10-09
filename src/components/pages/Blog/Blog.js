"use client";
import React from "react";
import styles from "./Blog.module.scss";
import BlogCards from "@/components/pages/Blog/Blog-details/BlogCards";
const Blog = () => {

  return (
    <section>
      <div className="container">
        <div className="row">
          <div
            className={`${styles["slide-effect"]} d-flex flex-column ms-0 ms-lg-5`}
          >
            <div
              className={`${styles["slideUp"]} display-3 fw-bold text-white mb-4`}
            >
              Blogs
            </div>
          </div>
        </div>
      </div>
      <BlogCards />
    </section>
  );
};

export default Blog;
