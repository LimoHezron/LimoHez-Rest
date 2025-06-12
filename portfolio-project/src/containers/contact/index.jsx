import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
    <Helmet>
      <title>Contact | Hire Hezron Limo - React Developer</title>
      <meta name="description" content="Get in touch with Hezron Limo for freelance or full-time frontend development opportunities. Reach out via email or social links."/>
      <meta name="keywords" content="contact Hezron, hire React developer, frontend freelancer, Kenya developer" />
      <link rel="canonical" href="/contact" />
    </Helmet>
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required type={"name"} name="name" className="inputName" />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input required type={"email"} name="email" className="inputEmail" />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  type={"description"}
                  name="description"
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </Animate>
      </div>
    </section>
    </>
  );
};
export default Contact;
