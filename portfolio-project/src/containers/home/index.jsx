import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import {Animate} from "react-simple-animate"

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate("/contacts");
  };
  return (
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
        transform : 'translateY(550px)'
      }}
      end={{
        transform : 'translateX(0px)'
      }}
      >
      <div className="home__contact-me">
        <button onClick={handleNavigateToContactMePage}>Hire me</button>
      </div>
      </Animate>
    </section>
  );
};
export default Home;
