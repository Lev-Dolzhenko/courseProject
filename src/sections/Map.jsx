import React from "react";

const Map = () => {
  return (
    <section className="map">
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d143693.81623246707!2d37.6111104!3d55.754751999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1713371195678!5m2!1sen!2sru"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
