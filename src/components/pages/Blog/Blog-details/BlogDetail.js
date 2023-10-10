"use client";
import React, { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./BlogDetail.module.scss";
import queryStyles from "../../../../components/pages/Hero/QueryForm.module.scss";
import { BlogList } from "../../../../../Json/BlogList";
// import { useQueryState } from 'next-usequerystate';
// import styles from "./Blog.module.scss";
// import BlogCards from "@/components/BlogCards/BlogCards";
const BlogDetail = () => {
  const [blogDetails, setBlogDetails] = React.useState({});
  const [blogAdditionalDetails, setBlogAdditionalDetails] = React.useState([]);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    BlogList.forEach((element) => {
      if (element.id == params.get("blog")) {
        if (element.data.length > 0) {
          element.data.forEach((item) => {
            if (item.id == params.get("id")) {
              setBlogDetails(item);
              setBlogAdditionalDetails(item.additionalInfo)
            }
          });
        }
      }
    });
  }, []);

  const goTo = (page) => {
    if (page == "home") {
      router.push("/");
    } else if (page == "blog") router.push("/blog");
  };

  return (
    <section>
      {blogDetails && <div className="container">
        <div className="row">
          <div
            className={`${styles["slide-effect"]} d-flex flex-column ms-0 ms-lg-5`}
          >
            <div
              className={`${styles["slideUp"]} display-3 fw-bold text-white mb-4`}
            >
              Blogs<span className="color-red">.</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`d-flex flex-row gap-3 ms-lg-5`}>
            <div
              className={`fs-5 fw-200 color-red mb-4`}
              role="button"
              onClick={() => goTo("home")}
            >
              Home
            </div>
            <div className={`fs-5 fw-200 text-white mb-4`}>/</div>
            <div
              className={`fs-5 fw-200 color-red mb-4`}
              role="button"
              onClick={() => goTo("blog")}
            >
              Blogs
            </div>
            <div className={`fs-5 fw-200 text-white mb-4`}>/</div>
            <div className={`fs-5 fw-200 text-white mb-4`}>
              {blogDetails.title}
            </div>
          </div>
        </div>
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6 ps-lg-5">
            <img
              src={"/images/contact/insight.png"}
              alt="image"
              className="w-100 p-0 ps-md-3"
            />
          </div>
          <div className="col-12 col-lg-6 ps-lg-5">
            <div className={`text-start ps-md-3`}>
              <div>
                <p
                  className={`${styles["upper-p"]} fw-normal mt-4 text-start color-red mb-4`}
                >
                  {blogDetails.subtitle}
                </p>
                <h5
                  className={`w-75 fs-4 fw-medium text-start text-white mb-4`}
                >
                  {blogDetails.title}
                </h5>
                <div
                  className={`fw-normal fs-6 gap-2 text-white d-flex align-items-center`}
                >
                  Jan 5,2022 <div className={styles["bullets"]}></div> 5 min
                  Read
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center mt-5">
          <div className="col-12 col-md-10 col-lg-9">
            <ul>
              {blogAdditionalDetails.map((item, index) => {
                return <li className="text-white fw-normal fs-5 mb-4" key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center mt-5">
          <div className="col-11">
            <h2 className="text-white fw-semibold display-5">Comment!</h2>
            <div className="row d-lg-flex flex-lg-row flex-column">
              <div className="d-md-flex align-items-center col-12 col-lg-6 flex-column flex-md-row">
                <label className={`${queryStyles["form-lable"]} noWrap`}>
                  HI! I am
                </label>
                <span> </span>
                <input
                  type="text"
                  placeholder="eg : Musk"
                  className={`${queryStyles["input-box"]}`}
                ></input>
              </div>
              <div className="d-md-flex align-items-center col-12 col-lg-6 flex-column flex-md-row">
                <label className={`${queryStyles["form-lable"]} noWrap`}>
                  Reach me at
                </label>
                <span> </span>
                <input
                  type="email"
                  placeholder="eg : musk@first.com"
                  className={`${queryStyles["input-box"]}`}
                ></input>
              </div>
              <div
                className={`${queryStyles["message-div"]} d-md-flex flex-column flex-md-row align-items-center col-12`}
              >
                <label className={`${queryStyles["form-lable"]} noWrap`}>
                  Message{" "}
                </label>
                <span> </span>
                <textarea
                  type="text-area"
                  placeholder="eg : ......."
                  className={`${queryStyles["text-area"]} w-100`}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div
            style={{ textAlign: "center" }}
            className={`${queryStyles["sendBtnCol"]} d-flex col-3 ms-5 ps-5`}
          >
            <a
              href="#"
              className={`${queryStyles["ball"]} fw-semibold fs-1 ps-3 ${styles["ball"]}`}
            >
              Send
              <div
                className={`${queryStyles["span-wrapper"]} ${styles["span-blocks"]}`}
              >
                <span className={`${queryStyles["s1"]}`}></span>
                <span className={`${queryStyles["s2"]}`}></span>
                <span className={`${queryStyles["s3"]}`}></span>
              </div>
            </a>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default BlogDetail;
