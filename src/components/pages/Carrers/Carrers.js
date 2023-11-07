/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import styles from "./Carrers.module.scss";
import CultureCards from "./CultureCards";
import Filter from "./FilterSection/Filter";
import CircleAnimation from "./Animation/CircleAnimation";
import OurClientAnime from "@/components/Animations/OurClientAnime/OurClientFirstScreen";

const Carrers = () => {
  return (
    <div className={styles["main"]}>
      <section className="container">
        <div className={`${styles["top"]} row`}>
          <div className={`${styles["top_left"]} col-12 col-lg-6`}>
            <h1>Careers at Creware</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate et pulvinar fermentum sed semper
              placerat.Lorem ipsum dolor sit amet consectetur. Ipsum molestie
              pulvinar tempus sed tempus. Et pharetra gravida sed sit gravida.
              Id at morbi dignissim mauris. Vulputate et pulvinar fermentum sed
              semper placerat.Lorem ipsum dolor sit amet consectetur. Ipsum
              molestie pulvinar tempus sed tempus. Et pharetra gravida sed sit
              gravida. Id at morbi dignissim mauris. Vulputate et pulvinar
              fermentum sed semper placerat.Lorem ipsum dolor sit amet
              consectetur. Ipsum molestie pulvinar tempus sed tempus. Et
              pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
              Vulputate et pulvinar fermentum sed semper placerat.
            </p>
          </div>
          <div className={`${styles["top_right"]} col-12 col-md-9 col-lg-6`}>
            <CircleAnimation />
          </div>
        </div>

        <div className={`${styles["we_constantly"]}`}>
          <div className={styles["title"]}>
            <h1>We Constantly try to make you proud of your workspace. </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum molestie pulvinar
              tempus sed tempus. Et pharetra gravida sed sit gravida. Id at
              morbi dignissim mauris. Vulputate et pulvinar fermentum sed semper
              placerat. Sit et massa cursus sed purus dictum ornare. Sed arcu mi
              est enim mauris risus tincidunt sodales. Nibh tincidunt fusce
              tincidunt bibendum pulvinar. Lorem ipsum dolor sit amet
              consectetur. Ipsum molestie pulvinar tempus sed tempus. Et
              pharetra gravida sed sit gravida. Id at morbi dignissim mauris.
              Vulputate et pulvinar fermentum sed semper placerat. Sit et massa
              cursus sed purus dictum ornare. Sed arcu mi est enim mauris risus
              tincidunt sodales. Nibh tincidunt fusce tincidunt bibendum
              pulvinar.
            </p>
          </div>
          <div className={`${styles["constant_button"]} `}>
            <button>see all openings</button>
          </div>
        </div>

        {/* our clients */}
        <div className={`${styles["our_clients"]}`}>
          <h1>
            Our <span> Clients.</span>
          </h1>
          <OurClientAnime />
        </div>

        <div className={styles["culture_values"]}>
          <div className={styles["title"]}>
            <h1>
              Culture &<span> Values.</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus
              vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
              euismod.
            </p>
          </div>

          {/* cards */}
          <div className={`${styles["culture_cards"]} row`}>
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
          </div>
        </div>

        <div className={styles["perks_benefits"]}>
          <div className={styles["title"]}>
            <h1>
              Perks &<span> Benefits.</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus
              vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
              euismod.
            </p>
          </div>

          {/* cards */}
          <div className={`${styles["culture_cards"]} row`}>
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
          </div>
        </div>

        <div className={styles["perks_benefits"]}>
          <div className={styles["title"]}>
            <h1>
              Relocation<span> Package</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus
              vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
              euismod.
            </p>
          </div>

          {/* cards */}
          <div className={`${styles["culture_cards"]} row`}>
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
            <CultureCards />
          </div>
        </div>

        <div className={`${styles["open_positions"]}`}>
          <div className={styles["title"]}>
            <h1>
              Open<span> Positions</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem et donec leo lectus
              vel ullamcorper facilisis. Dictum eros enim enim luctus sit semper
              euismod.
            </p>
          </div>

          <Filter />
        </div>
      </section>
    </div>
  );
};

export default Carrers;
