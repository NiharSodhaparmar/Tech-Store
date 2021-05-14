import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form className="mt-5">
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="nihar sodhaparmar"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email@email.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="important!!!"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="hello there buddy"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
