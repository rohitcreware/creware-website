import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Accordion.scss";

const plus =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 648 712'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z' fill='white'/%3E%3C/svg%3E";

const minus =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 648 712'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' fill='white'/%3E%3C/svg%3E";

const DynamicAccordian = ({
  item,
  data,
  setSlickSlideNo,
  slickSlideNo,
  tabIndex,
  expanded,
  setExpanded,
}) => {
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (slickSlideNo == data.length - 1) {
        accordianItemClickHandler(0);
      } else {
        accordianItemClickHandler(slickSlideNo + 1);
      }
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [slickSlideNo]);

  const isOpen = tabIndex === expanded;

  const accordianItemClickHandler = (itemId) => {
    setExpanded(itemId);
    setSlickSlideNo(itemId);
  };

  const toggleBtnVariants = {
    open: { transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] } },
  };
  const slideHeadDownVariant = {
    hidden: {
      transform: "translateY(-100%)",
    },
    visible: {
      transform: "translateY(0%)",
    },
    exit: {
      transform: "translateY(-100%)",
    },
  };

  return (
    <div className="accord_main">
      <div
        className="item_main"
        onClick={() => accordianItemClickHandler(tabIndex)}
      >
        <motion.img
          src={isOpen ? plus : minus}
          initial="close"
          animate="open"
          exit="close"
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          variants={toggleBtnVariants}
        />

        <motion.div
          initial={false}
          className={`accordian_tab_title ${isOpen ? "crewareRed" : "#fff"}`}
        >
          {item.title}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="full_dimension">
              <motion.p
                className="accrodian_desc"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideHeadDownVariant}
              >
                {item.content}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicAccordian;

export const AccordianMain = ({ items, setSlickSlideNo, slickSlideNo }) => {
  const [expanded, setExpanded] = useState(0);

  return items.map((item, i) => (
    <React.Fragment key={i}>
      <DynamicAccordian
        tabIndex={i}
        setExpanded={setExpanded}
        expanded={expanded}
        item={item}
        data={items}
        setSlickSlideNo={setSlickSlideNo}
        slickSlideNo={slickSlideNo}
      />
    </React.Fragment>
  ));
};
