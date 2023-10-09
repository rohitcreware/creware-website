import React from "react";
import "../../Style/PortfolioBar.scss";
import { portfolio } from "../../../Json/HomeCard";

const PortfolioBar = () => {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio-head">
          <h2 className="portfolio-h2">
            OUR <span>PORTFOLIO</span>
          </h2>
        </div>
        <div className="base-div">
          <div className="portfolio-card">
            {portfolio.map((item, index) => {
              return (
                <div className="portfolio-card-div" key={index}>
                  <img
                    style={{ width: 300, height: 300 }}
                    src={item.img}
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioBar;
