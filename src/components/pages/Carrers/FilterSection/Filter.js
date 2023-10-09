"use client";

import React, { useState } from "react";
import styles from "./Filter.module.scss";
import FilterCards from "./FilterCards";
import { CarrerFilter } from "../../../../../Json/CarrierFilter";
import Select from "react-select";
import DropdownIcon from "../../../../assets/svgs/dropdownIcon.svg";

const options = [
  { value: "mern", label: "Mern" },
  { value: "node", label: "Node" },
  { value: "react native", label: "React Native" },
];

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  return (
    <div className={styles["main"]}>
      <div className={`${styles["heading"]} row d-flex align-items-center`}>
        <div className={`${styles["title"]} col-6 col-lg-4 col-xl-2`}>
          Filter by department
        </div>
        <div className={`${styles["select_box"]} col-6 col-lg-3 col-xl-2`}>
          <Select
            onChange={selectedOption}
            defaultValue={selectedOption}
            options={options}
            components={{
              IndicatorSeparator: null,
              DropdownIndicator: DropdownIcon,
            }}
            className={styles["vacancy_dropdown"]}
            placeholder="All Vacancies"
          />
        </div>
      </div>
      {CarrerFilter?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <FilterCards item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Filter;
