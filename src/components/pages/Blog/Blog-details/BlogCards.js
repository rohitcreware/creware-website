"use client";
import React, { useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import { useRouter } from "next/navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "@/Style/BlogCards.module.scss";
import { BlogList } from "../../../../../Json/BlogList";
import Link from "next/link";
const BlogCards = () => {
  const router = useRouter();

  const [blogVisible, setBlogVisible] = React.useState(true);
  useEffect(() => {
    tabSelected();
  }, []);

  const tabSelected = () => {
    setTimeout(() => {
      let doc = document.querySelectorAll(".react-tabs__tab");
      doc.forEach((item) => {
        if (item.classList.contains("react-tabs__tab--selected")) {
          item.classList.add("tab--selected");
        } else {
          item.classList.remove("tab--selected");
        }
      });
    }, 50);
  };

  const blogDetail = (tabData,item) => {
    setBlogVisible(false);
    router.push(`/blog/blog-details?blog=` +tabData.id + "&id=" + item.id);
  };

  return (
    <>
      {blogVisible && (
        <div className="container pt-3 d-flex align-items-center justify-content-center text-center">
          <Tabs
            className={`d-flex align-items-center justify-content-center flex-column`}
          >
            <TabList className={`${styles["tab-list"]}`}>
              {BlogList.map((tabData, index) => {
                return (
                  <Tab
                    key={index}
                    onClick={() => {
                      tabSelected();
                    }}
                  >
                    {tabData.tabName}
                  </Tab>
                );
              })}
            </TabList>

            {BlogList.map((tabData, index) => {
              return (
                <TabPanel key={index}>
                  <div className="container text-center my-3">
                    <div className={`row ${styles.margin}`}>
                      {tabData.data.map((item, i) => {
                        return (
                          <div className="col-12 col-sm-12 col-md-6 col-lg-5" key={i}>
                            <div
                              className={`${styles["single-card"]} col-12 text-start mx-0 my-0 p-3`}
                              role="button"
                              onClick={() => {
                                blogDetail(tabData,item);
                              }}
                            >
                              <img
                                className={`w-100`}
                                src="/images/contact/insight.png"
                                alt="Card image cap"
                              />
                              <div className={`text-start`}>
                                <div>
                                  <p
                                    className={`${styles["upper-p"]} fw-normal mt-4 text-start text-white`}
                                  >
                                    {item.subtitle}
                                  </p>
                                  <h5
                                    className={`${styles["card-title-h2"]} fs-4 fw-medium text-start text-white`}
                                  >
                                    {item.title}
                                  </h5>
                                  <p
                                    className={`${styles["card-text-p"]} fw-normal fs-6 text-start text-white`}
                                  >
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`ms-2 fw-normal fs-6 gap-2 text-white d-flex align-items-center`}
                            >
                              Jan 5,2022{" "}
                              <div className={styles["bullets"]}></div> 5 min
                              Read
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      )}
    </>
  );
};

export default BlogCards;
