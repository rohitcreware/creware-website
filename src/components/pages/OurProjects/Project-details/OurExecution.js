import Image from "next/image";
import styles from "./OurExecution.module.scss";

const OurExecution = () => {
  return (
    <div className={styles["content"]}>
      <div className={`${styles["main"]} row`}>
        <div className={`${styles["left"]} col-12 col-lg-9`}>
          <h1>
            Our <span>Execution</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus
            vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
            euismod. Adipiscing amet cursus feugiat sagittis placerat
            nisi.euismod. Adipiscing amet cursus feugiat sagittis placerat nisi.
          </p>
        </div>
        <div>
          <div className={`${styles["left"]} col-12`}>
            <Image
              src="/images/project-details/bahamas_landing.png"
              alt=""
              className="img-fluid"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className={`${styles["bottom"]} row gx-3`}>
          <div className={`${styles["left"]} col-6`}>
            <Image
              src="/images/project-details/albany_card_img.png"
              alt=""
              className="img-fluid"
              height={460}
              width={460}
            />
          </div>
          <div className={`${styles["right"]} col-6`}>
            <Image
              src="/images/project-details/welcome.png"
              className="img-fluid"
              alt=""
              height={460}
              width={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExecution;
