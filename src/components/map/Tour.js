import React from "react";
import { tours } from "../../data";

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((info) => {
        const { id, img, date, title, text, location, duration, cost } = info;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {location}
                </p>
                <p>{duration}</p>
                <p>{cost}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
