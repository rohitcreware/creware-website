import * as React from "react";
import styles from "./ExpandingCards.module.scss";

const ExpandingCards = ({ cardList }) => {
  const [activeId, setActiveId] = React.useState(1);
  const [scrollX, setScrollX] = React.useState(0);
  let timer;

  const onClick = (id) => {
    setActiveId(id);
    clearInterval(timer);
  };

  React.useEffect(() => {
    timer = setInterval(() => {
      if (activeId == 5) {
        setActiveId(1);
      } else {
        setActiveId(activeId + 1);
      }
    }, 3000);

    return () => {
      // Clear the interval to prevent memory leaks
      clearInterval(timer);
    };
  }, [activeId]);

  return (
    <div className={`${styles.container} d-none d-sm-flex flex-sm-row`}>
      {cardList.map((data) => {
        return (
          <div
            key={data.id}
            className={`${styles.panel} ${
              activeId === data.id ? `${styles.active}` : ""
            } overflow-hidden`}
            onClick={() => onClick(data.id)}
            style={{ backgroundImage: `url(${data.url})` }}
          >
            <div>
              <h3
                className={`fs-5 ${
                  activeId === data.id
                    ? `${styles.horizontal}`
                    : `${styles.vertical}`
                }`}
              >
                <p className="mb-0 ms-1 fw-bold fs-33 noWrap">
                  {data.title[0]}
                </p>
                <p className="mb-0 ms-1 fw-bold fs-33 noWrap">
                  {data.title[1]}
                </p>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandingCards;
