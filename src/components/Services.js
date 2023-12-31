import React from "react";
import Title from "./Title";
import Service from "./map/Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <Service />

      {/* <div className="section-center services-center">
        {services.map((info) => {
          const { id, icon, title, text } = info;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div> */}
    </section>
  );
};

export default Services;
