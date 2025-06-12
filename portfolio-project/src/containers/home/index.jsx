import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <>
    <Helmet>
      <title> Hezron Limo | Home</title>
      <meta name="description" content="Welcome to the Porfolio of Hezron Limo, a skilled React Frontend Developer."/>
      <meta name="keyword" content="Hezron Limo, React, Frontend Developer, Portfolio"/>
      <link rel="canonical" href="/" />
    </Helmet>
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Hezron Limo
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire me</button>
        </div>
      </Animate>
    </section>
    </>
  );
};
export default Home;
