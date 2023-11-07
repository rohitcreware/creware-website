import React, { useState } from "react";

import styles from "./ContactForm.module.scss";
import RightArrowTowardsButton from "@/components/Animations/RightArrowTowardsButton";

const ContactForm = () => {
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
    <form onSubmit={onSubmitHandler} method="post" action="api/sendmail">
      <div>
        <label className={`${styles["form-lable"]}`}>HI! I am</label>
        <input
          type="text"
          placeholder="eg : Musk"
          className={`${styles["input-box"]}`}
          onChange={onInputChangeHandler}
          name="name"
        ></input>
      </div>
      <div>
        <label className={`${styles["form-lable"]}`}>Reach me at</label>
        <input
          type="email"
          placeholder="eg : musk@first.com"
          className={`${styles["input-box"]}`}
          name="reachMeAt"
          onChange={onInputChangeHandler}
        ></input>
      </div>
      <div>
        <label className={`${styles["form-lable"]}`}>Country</label>
        <input
          type="text"
          placeholder="eg : India"
          className={`${styles["input-box"]}`}
          name="country"
          onChange={onInputChangeHandler}
        ></input>
      </div>
      <div>
        <label className={`${styles["form-lable"]}`}>Mobile no.</label>
        <input
          type="tel"
          placeholder="eg : 9876543210"
          className={`${styles["input-box"]}`}
          name="mobile_number"
          onChange={onInputChangeHandler}
        ></input>
      </div>
      <div>
        {" "}
        <label className={`${styles["form-lable"]}`}>Company Name</label>
        <input
          type="text"
          placeholder="eg : Creware technologies"
          className={`${styles["input-box-1"]}`}
          name="company_name"
          onChange={onInputChangeHandler}
        ></input>
      </div>
      <div className={`${styles["message-div"]} `}>
        <label className={`${styles["form-lable"]}`}>Message </label>
        <input
          type="text-area"
          placeholder="eg : ......."
          className={`${styles["input-box-1"]}`}
          name="message"
          onChange={onInputChangeHandler}
        ></input>
      </div>

      <div className="form-check d-flex justify-content-center mt-4">
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
          Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus vel
          ullamcorper facilisis. Dictum eros enim enim luctus sit semper
          euismod..
        </label>
      </div>

      {/* button section */}

      <div className={`${styles["button_section"]} row mt-3`}>
        <div className={`${styles["button_col"]} col-9`}>
          <RightArrowTowardsButton hover={buttonHover} duration={0.5} />
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
  );
};

export default ContactForm;
