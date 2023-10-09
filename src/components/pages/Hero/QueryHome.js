"use client";

import React, { useState } from "react";
import styles from "../Hero/QueryHome.module.scss";
import RightArrowTowardsButton from "@/components/Animations/RightArrowTowardsButton";
import { TextField } from "@mui/material";
import axios from "axios";

const QueryForm = ({ mainContainerWidth }) => {
  const [buttonHover, setButtonHover] = useState(false);
  const [formData, setFormData] = useState({});

  const onInputChangeHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [inputName]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const jsonFormData = JSON.stringify(formData);

    axios.post("/api/sendmail", jsonFormData);
  };

  return (
    <>
      <div className={`${styles["form-div"]} container`}>
        <div
          className={`${styles["main-div"]}`}
          style={{ width: mainContainerWidth ? mainContainerWidth : "" }}
        >
          <div className="row">
            <div
              className={`${styles["form-first-div"]} col-12 col-md-12 col-lg-6`}
            >
              <div className={`${styles["row-left"]} row`}>
                <h2 className={`${styles["first-div-h2"]}`}>
                  We’d love to hear your story
                </h2>
                <p className={`${styles["first-div-p"]}`}>
                  Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                  lectus vel ullamcorper facilisis. Dictum eros enim enim luctus
                  sit semper euismod.
                </p>
                <div className={`${styles["form-mobile-div"]}`}>
                  <p className={`${styles["mobile-one"]}`}>+1(302)-231-1293</p>
                  <p className={`${styles["mobile-one"]}`}>+91-78294-13575</p>
                </div>
                <p className={`${styles["form-email"]}`}>Info@creware.asia</p>
                {/* <SocialMedia/> */}
              </div>
            </div>
            <div
              className={`${styles["form-second-div"]} col-12 col-md-12 col-lg-6`}
            >
              <div className="row ">
                <h2 className={`${styles["second-div-h2"]}`}>Get in touch</h2>
                <div className={`${styles["form-row"]}`}>
                  <form
                    onSubmit={onSubmitHandler}
                    method="post"
                    action="api/sendmail"
                  >
                    <div>
                      <label className={`${styles["form-lable"]}`}>
                        HI! I am
                      </label>
                      <input
                        type="text"
                        placeholder="eg : Musk"
                        className={`${styles["input-box"]}`}
                        onChange={onInputChangeHandler}
                        name="name"
                      ></input>
                      {/* <TextField
                        id="standard-basic"
                        label="eg : Musk"
                        variant="standard"
                        className={`${styles["custom-textfield"]}`}
                        onChange={onInputChangeHandler}
                        name="name"
                      /> */}
                    </div>
                    <div>
                      <label className={`${styles["form-lable"]}`}>
                        Reach me at
                      </label>
                      <input
                        type="email"
                        placeholder="eg : musk@first.com"
                        className={`${styles["input-box"]}`}
                        name="reachMeAt"
                        onChange={onInputChangeHandler}
                      ></input>
                      {/* <TextField
                        id="standard-basic"
                        label="eg : musk@first.com"
                        variant="standard"
                        className={`${styles["custom-textfield"]}`}
                        name="reachMeAt"
                        onChange={onInputChangeHandler}
                      /> */}
                    </div>
                    <div>
                      <label className={`${styles["form-lable"]}`}>
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="eg : India"
                        className={`${styles["input-box"]}`}
                        name="country"
                        onChange={onInputChangeHandler}
                      ></input>
                      {/* <TextField
                        id="standard-basic"
                        label="eg : India"
                        variant="standard"
                        className={`${styles["custom-textfield"]}`}
                        name="country"
                        onChange={onInputChangeHandler}
                      /> */}
                    </div>
                    <div>
                      <label className={`${styles["form-lable"]}`}>
                        Mobile no.
                      </label>
                      <input
                        type="tel"
                        placeholder="eg : 9876543210"
                        className={`${styles["input-box"]}`}
                        name="mobile_number"
                        onChange={onInputChangeHandler}
                      ></input>
                      {/* <TextField
                        id="standard-basic"
                        label="eg : 9876543210"
                        variant="standard"
                        className={`${styles["custom-textfield"]}`}
                        name="mobile_number"
                        onChange={onInputChangeHandler}
                      /> */}
                    </div>
                    <div>
                      {" "}
                      <label className={`${styles["form-lable"]}`}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="eg : Creware technologies"
                        className={`${styles["input-box-1"]}`}
                        name="company_name"
                        onChange={onInputChangeHandler}
                      ></input>
                      {/* <TextField
                        id="standard-basic"
                        label="eg : Creware technologies"
                        variant="standard"
                        className={`${styles["custom-textfield1"]}`}
                        name="company_name"
                        onChange={onInputChangeHandler}
                      /> */}
                    </div>
                    <div className={`${styles["message-div"]}`}>
                      <label className={`${styles["form-lable"]}`}>
                        Message{" "}
                      </label>
                      <textarea
                        type="text-area"
                        placeholder="eg : ......."
                        className={`${styles["text-area"]}`}
                        name="message"
                        onChange={onInputChangeHandler}
                      ></textarea>
                      {/* <TextField
                        id="standard-basic"
                        label="eg : ......."
                        variant="standard"
                        className={`${styles["custom-textfield"]}`}
                        name="message"
                      /> */}
                    </div>

                    <div className="form-check d-flex align-items-center justify-content-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        name="terms_checkbox"
                        onChange={onInputChangeHandler}
                      />
                      <label
                        className="form-check-label text-white fs-14"
                        htmlFor="flexCheckDefault"
                      >
                        Lorem ipsum dolor sit amet consectetur. Lorem et donec
                        leo lectus vel ullamcorper facilisis. Dictum eros enim
                        enim luctus sit semper euismod..
                      </label>
                    </div>

                    {/* button section */}

                    <div className={`${styles["button_section"]} row`}>
                      <div className={`${styles["button_col"]} col-9`}>
                        <RightArrowTowardsButton
                          hover={buttonHover}
                          duration={0.5}
                        />
                      </div>

                      <div
                        style={{ textAlign: "center" }}
                        className={`${styles["sendBtnCol"]} col-3`}
                      >
                        <button
                          type="submit"
                          className={`${styles["ball"]}`}
                          onMouseEnter={() => setButtonHover(true)}
                          onMouseLeave={() => setButtonHover(false)}
                          onClick={onSubmitHandler}
                        >
                          Send
                          <div className={`${styles["span-wrapper"]}`}>
                            <span className={`${styles["s1"]}`}></span>
                            <span className={`${styles["s2"]}`}></span>
                            <span className={`${styles["s3"]}`}></span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryForm;
