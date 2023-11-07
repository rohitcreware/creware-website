"use client";

import React, { useState } from "react";
import styles from "../Hero/QueryForm.module.scss";
import RightArrowTowardsButton from "@/components/Animations/RightArrowTowardsButton";

const QueryForm = () => {
  const [buttonHover, setButtonHover] = useState(false);
  const [svgColor1, setSvgColor1] = useState("white");
  const [svgColor2, setSvgColor2] = useState("white");
  const [svgColor3, setSvgColor3] = useState("white");
  const [svgColor4, setSvgColor4] = useState("white");
  const [svgColor5, setSvgColor5] = useState("white");
  const [svgColor6, setSvgColor6] = useState("white");

  return (
    <>
      <div className={`${styles["form-div"]} container`}>
        <div className={`${styles["main-div"]}`}>
          <div className="row">
            <div className={`${styles["form-first-div"]} col-12 col-lg-6 `}>
              <div className={`${styles["row-left"]} row`}>
                <div className={`${styles["slide-effect"]} `}>
                  <div
                    className={`${styles["first-div-h2"]} ${styles["slideUp"]} `}
                  >
                    We’d love to hear your story
                  </div>
                </div>
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
                <p className={`${styles["social-div1"]}`}>
                  <svg
                    className={`${styles["social-img"]}`}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onMouseEnter={() => setSvgColor1("red")}
                    onMouseLeave={() => setSvgColor1("white")}
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M28.127 3.50195C28.5097 3.502 28.8791 3.64252 29.1652 3.89685C29.4512 4.15118 29.6339 4.50164 29.6787 4.88175L29.6896 5.06458V11.3151C29.6896 11.6978 29.549 12.0672 29.2947 12.3532C29.0404 12.6393 28.6899 12.822 28.3098 12.8668L28.127 12.8777H23.4391V14.4403H28.127C28.3494 14.4404 28.5693 14.488 28.7719 14.5799C28.9745 14.6718 29.1551 14.8058 29.3017 14.9732C29.4483 15.1405 29.5575 15.3371 29.6219 15.55C29.6864 15.7629 29.7047 15.9871 29.6756 16.2077L29.6443 16.3827L28.0817 22.6332C28.0041 22.9418 27.8342 23.2194 27.5946 23.4288C27.355 23.6383 27.0572 23.7696 26.7409 23.8051L26.5644 23.8161H23.4391V33.1918C23.4391 33.5746 23.2985 33.944 23.0442 34.23C22.7899 34.516 22.4394 34.6987 22.0593 34.7435L21.8765 34.7545H15.626C15.2433 34.7544 14.8738 34.6139 14.5878 34.3596C14.3018 34.1052 14.1191 33.7548 14.0743 33.3747L14.0634 33.1918V23.8161H10.9381C10.5554 23.816 10.186 23.6755 9.89995 23.4212C9.61393 23.1669 9.43121 22.8164 9.38643 22.4363L9.37549 22.2535V16.003C9.37554 15.6202 9.51606 15.2508 9.77039 14.9648C10.0247 14.6788 10.3752 14.496 10.7553 14.4513L10.9381 14.4403H14.0634V12.8777C14.0633 10.4519 15.0034 8.12051 16.6862 6.37332C18.369 4.62613 20.6634 3.59917 23.0875 3.5082L23.4391 3.50195H28.127Z"
                        fill={svgColor1}
                      />
                    </g>
                  </svg>
                  <svg
                    onMouseEnter={() => setSvgColor2("red")}
                    onMouseLeave={() => setSvgColor2("white")}
                    className={`${styles["social-img"]}`}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ri:instagram-fill">
                      <path
                        id="Vector"
                        d="M18.7508 3.50195C22.9964 3.50195 23.5261 3.51758 25.1919 3.59571C26.8561 3.67384 27.989 3.9348 28.986 4.32233C30.0173 4.71924 30.8861 5.25678 31.7549 6.12404C32.5495 6.90519 33.1643 7.8501 33.5566 8.89301C33.9426 9.8884 34.2051 11.0229 34.2833 12.6871C34.3567 14.3528 34.377 14.8826 34.377 19.1282C34.377 23.3739 34.3614 23.9036 34.2833 25.5693C34.2051 27.2335 33.9426 28.3664 33.5566 29.3634C33.1655 30.4069 32.5505 31.352 31.7549 32.1324C30.9736 32.9267 30.0287 33.5415 28.986 33.9341C27.9906 34.32 26.8561 34.5826 25.1919 34.6607C23.5261 34.7341 22.9964 34.7545 18.7508 34.7545C14.5051 34.7545 13.9754 34.7388 12.3096 34.6607C10.6454 34.5826 9.51252 34.32 8.51557 33.9341C7.47224 33.5426 6.52717 32.9277 5.7466 32.1324C4.95186 31.3514 4.337 30.4064 3.94489 29.3634C3.55736 28.368 3.2964 27.2335 3.21827 25.5693C3.14483 23.9036 3.12451 23.3739 3.12451 19.1282C3.12451 14.8826 3.14014 14.3528 3.21827 12.6871C3.2964 11.0213 3.55736 9.88997 3.94489 8.89301C4.33592 7.84946 4.95091 6.90429 5.7466 6.12404C6.5274 5.32902 7.4724 4.71413 8.51557 4.32233C9.51252 3.9348 10.6439 3.67384 12.3096 3.59571C13.9754 3.52227 14.5051 3.50195 18.7508 3.50195ZM18.7508 11.3151C16.6786 11.3151 14.6913 12.1382 13.2261 13.6035C11.7608 15.0687 10.9376 17.056 10.9376 19.1282C10.9376 21.2004 11.7608 23.1877 13.2261 24.6529C14.6913 26.1182 16.6786 26.9413 18.7508 26.9413C20.8229 26.9413 22.8102 26.1182 24.2755 24.6529C25.7407 23.1877 26.5639 21.2004 26.5639 19.1282C26.5639 17.056 25.7407 15.0687 24.2755 13.6035C22.8102 12.1382 20.8229 11.3151 18.7508 11.3151ZM28.9078 10.9244C28.9078 10.4064 28.702 9.90956 28.3357 9.54324C27.9694 9.17693 27.4726 8.97114 26.9545 8.97114C26.4365 8.97114 25.9397 9.17693 25.5734 9.54324C25.2071 9.90956 25.0013 10.4064 25.0013 10.9244C25.0013 11.4425 25.2071 11.9393 25.5734 12.3056C25.9397 12.6719 26.4365 12.8777 26.9545 12.8777C27.4726 12.8777 27.9694 12.6719 28.3357 12.3056C28.702 11.9393 28.9078 11.4425 28.9078 10.9244ZM18.7508 14.4403C19.9941 14.4403 21.1864 14.9342 22.0656 15.8134C22.9447 16.6925 23.4386 17.8849 23.4386 19.1282C23.4386 20.3715 22.9447 21.5639 22.0656 22.443C21.1864 23.3222 19.9941 23.8161 18.7508 23.8161C17.5075 23.8161 16.3151 23.3222 15.4359 22.443C14.5568 21.5639 14.0629 20.3715 14.0629 19.1282C14.0629 17.8849 14.5568 16.6925 15.4359 15.8134C16.3151 14.9342 17.5075 14.4403 18.7508 14.4403Z"
                        fill={svgColor2}
                      />
                    </g>
                  </svg>

                  <svg
                    onMouseEnter={() => setSvgColor3("red")}
                    onMouseLeave={() => setSvgColor3("white")}
                    className={`${styles["social-img"]}`}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ri:linkedin-fill">
                      <path
                        id="Vector"
                        d="M10.8443 8.18931C10.8438 9.01818 10.5142 9.81294 9.92778 10.3987C9.34139 10.9845 8.54631 11.3134 7.71744 11.313C6.88857 11.3126 6.09382 10.9829 5.50801 10.3965C4.9222 9.81014 4.59334 9.01506 4.59375 8.18619C4.59416 7.35732 4.92383 6.56257 5.51022 5.97676C6.09661 5.39095 6.8917 5.06209 7.72056 5.0625C8.54943 5.06291 9.34419 5.39258 9.92999 5.97897C10.5158 6.56536 10.8447 7.36045 10.8443 8.18931ZM10.938 13.6272H4.68751V33.1913H10.938V13.6272ZM20.8138 13.6272H14.5946V33.1913H20.7513V22.9249C20.7513 17.2057 28.205 16.6744 28.205 22.9249V33.1913H34.3774V20.7997C34.3774 11.1583 23.3453 11.5177 20.7513 16.2525L20.8138 13.6272Z"
                        fill={svgColor3}
                      />
                    </g>
                  </svg>
                </p>
                <p className={`${styles["social-div2"]}`}>
                  <svg
                    onMouseEnter={() => setSvgColor4("red")}
                    onMouseLeave={() => setSvgColor4("white")}
                    className={`${styles["social-img"]}`}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="lgi:email-outline">
                      <path
                        id="Vector"
                        d="M34.377 9.75123C34.377 8.03234 32.9707 6.62598 31.2518 6.62598H6.24976C4.53087 6.62598 3.12451 8.03234 3.12451 9.75123V28.5027C3.12451 30.2216 4.53087 31.628 6.24976 31.628H31.2518C32.9707 31.628 34.377 30.2216 34.377 28.5027V9.75123ZM31.2518 9.75123L18.7508 17.5644L6.24976 9.75123H31.2518ZM31.2518 28.5027H6.24976V12.8765L18.7508 20.6896L31.2518 12.8765V28.5027Z"
                        fill={svgColor4}
                      />
                    </g>
                  </svg>
                  <svg
                    onMouseEnter={() => setSvgColor5("red")}
                    onMouseLeave={() => setSvgColor5("white")}
                    className={`${styles["social-img"]}`}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M21.967 5.70405C19.1434 6.90259 17.287 9.53717 17.1916 12.5484L17.1885 12.8327L16.8088 12.7968C13.071 12.3765 9.78011 10.4341 7.52055 7.27918C7.36755 7.06536 7.16306 6.8936 6.92604 6.77981C6.68901 6.66602 6.4271 6.61388 6.16457 6.62822C5.90204 6.64255 5.64736 6.7229 5.42414 6.86182C5.20091 7.00073 5.01634 7.19373 4.88753 7.42294L4.73595 7.71359L4.65938 7.86829C3.53585 10.1888 2.79986 13.0093 3.07019 15.9986L3.11707 16.4252C3.55929 19.9614 5.46101 23.0117 9.02223 25.2994L9.29257 25.4666L9.16599 25.5338C7.11114 26.5698 5.2313 27.0214 3.18583 26.9401C1.53569 26.8776 0.926271 29.0841 2.37639 29.8747C7.99871 32.939 14.0351 33.8844 19.2402 32.3749C25.5845 30.531 30.4161 25.776 32.2647 19.1973L32.4632 18.4238C32.8351 16.8721 33.0445 15.2892 33.0898 13.6984L33.0945 13.1797L33.7086 11.9624L34.3961 10.6154L34.7305 9.9372L34.9149 9.55124C35.329 8.66835 35.6275 7.93704 35.8119 7.31668L35.8338 7.22918L35.8463 7.20105C36.19 6.27441 35.5869 5.079 34.3758 5.079L34.1852 5.08994C34.0617 5.10512 33.9406 5.13502 33.8242 5.17901L33.6898 5.23839C33.2439 5.45495 32.7846 5.64285 32.3147 5.80094L31.7584 5.98064L31.335 6.10565L30.1286 6.44005C28.0409 4.69303 25.2157 4.48052 22.2967 5.57435L21.967 5.70405Z"
                        fill={svgColor5}
                      />
                    </g>
                  </svg>
                  <svg
                    onMouseEnter={() => setSvgColor6("red")}
                    onMouseLeave={() => setSvgColor6("white")}
                    className={`${styles["social-img"]}`}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ic:baseline-whatsapp">
                      <path
                        id="Vector"
                        d="M29.7678 8.04929C28.3351 6.60218 26.6287 5.45481 24.748 4.67409C22.8673 3.89338 20.85 3.49495 18.8138 3.50205C10.2818 3.50205 3.32814 10.4557 3.32814 18.9877C3.32814 21.7223 4.04694 24.3787 5.3908 26.7227L3.20312 34.7546L11.4069 32.5981C13.6727 33.8326 16.2198 34.4889 18.8138 34.4889C27.3457 34.4889 34.2994 27.5352 34.2994 19.0033C34.2994 14.8623 32.6899 10.9714 29.7678 8.04929ZM18.8138 31.8637C16.5011 31.8637 14.2353 31.2386 12.2507 30.0667L11.7819 29.7854L6.90655 31.0668L8.20353 26.3164L7.891 25.832C6.60613 23.7802 5.92387 21.4085 5.92209 18.9877C5.92209 11.8933 11.7038 6.11163 18.7981 6.11163C22.2359 6.11163 25.4705 7.45549 27.8926 9.89318C29.0919 11.087 30.0423 12.5069 30.6888 14.0707C31.3352 15.6346 31.6648 17.3111 31.6585 19.0033C31.6898 26.0976 25.9081 31.8637 18.8138 31.8637ZM25.8768 22.2379C25.4862 22.0504 23.5798 21.1128 23.236 20.9722C22.8766 20.8472 22.6266 20.7847 22.3609 21.1597C22.0953 21.5504 21.3608 22.4254 21.1421 22.6755C20.9233 22.9411 20.6889 22.9724 20.2982 22.7692C19.9076 22.5817 18.6575 22.1598 17.1886 20.8472C16.0323 19.8159 15.2666 18.5501 15.0322 18.1595C14.8134 17.7688 15.0009 17.5657 15.2041 17.3625C15.376 17.1906 15.5947 16.9094 15.7823 16.6906C15.9698 16.4718 16.0479 16.2999 16.1729 16.0499C16.2979 15.7843 16.2354 15.5655 16.1417 15.378C16.0479 15.1905 15.2666 13.2841 14.9541 12.5028C14.6415 11.7527 14.3134 11.8465 14.079 11.8308H13.3289C13.0633 11.8308 12.657 11.9246 12.2976 12.3153C11.9538 12.7059 10.9537 13.6435 10.9537 15.5499C10.9537 17.4563 12.3445 19.3002 12.532 19.5502C12.7195 19.8159 15.2666 23.7224 19.1419 25.3944C20.0639 25.8007 20.7827 26.0351 21.3452 26.207C22.2672 26.5039 23.111 26.457 23.7829 26.3633C24.533 26.2539 26.08 25.4257 26.3925 24.5194C26.7206 23.613 26.7206 22.8473 26.6113 22.6755C26.5019 22.5036 26.2675 22.4254 25.8768 22.2379Z"
                        fill={svgColor6}
                      />
                    </g>
                  </svg>
                </p>
              </div>
            </div>
            <div className={`${styles["form-second-div"]} col-12 col-lg-6 `}>
              <div className="row ">
                <h2 className={`${styles["second-div-h2"]}`}>Get in touch</h2>
                <div className={`${styles["form-row"]}`}>
                  <div>
                    <label className={`${styles["form-lable"]}`}>
                      HI! I am
                    </label>
                    <span> </span>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="eg : Musk"
                      className={`${styles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    <label className={`${styles["form-lable"]}`}>
                      Reach me at
                    </label>
                    <span> </span>
                    <input
                      autoComplete="off"
                      type="email"
                      placeholder="eg : musk@first.com"
                      className={`${styles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    <label className={`${styles["form-lable"]}`}>Country</label>
                    <span> </span>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="eg : India"
                      className={`${styles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    <label className={`${styles["form-lable"]}`}>
                      Mobile no.
                    </label>
                    <span> </span>
                    <input
                      autoComplete="off"
                      type="tel"
                      placeholder="eg : 9876543210"
                      className={`${styles["input-box"]}`}
                    ></input>
                  </div>
                  <div>
                    {" "}
                    <label className={`${styles["form-lable"]}`}>
                      Company Name
                    </label>
                    <span> </span>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="eg : Creware technologies"
                      className={`${styles["input-box-1"]}`}
                    ></input>
                  </div>
                  <div className={`${styles["message-div"]}`}>
                    <label className={`${styles["form-lable"]}`}>
                      Message{" "}
                    </label>
                    <span> </span>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="eg : ......."
                      className={`${styles["input-box"]}`}
                    ></input>
                  </div>

                  <div className="form-check d-flex align-items-center justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-white fs-14"
                      htmlFor="flexCheckDefault"
                    >
                      Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                      lectus vel ullamcorper facilisis. Dictum eros enim enim
                      luctus sit semper euismod..
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
                      <a
                        href=""
                        className={`${styles["ball"]}`}
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={() => setButtonHover(false)}
                      >
                        Send
                        <div className={`${styles["span-wrapper"]}`}>
                          <span className={`${styles["s1"]}`}></span>
                          <span className={`${styles["s2"]}`}></span>
                          <span className={`${styles["s3"]}`}></span>
                        </div>
                      </a>
                    </div>
                  </div>
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
