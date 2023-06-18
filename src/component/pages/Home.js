import React from "react";
import "../../styles/Home/home.css";
import image1 from "../../image/img1.jpg";
import image2 from "../../image/img2.jpg";

const Home = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="content">
          <h1>Notch Hill Production</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="innerContent">
            It will entertain you. It will challenge you. It will make you feel
            something.
          </div>
        </div>
        <div className="overview">
          <div className="overview-content">
            <div className="first">
              <img src={image1} alt="img" />
            </div>
            <div className="second">
              <h1>Advertising & Communications</h1>
              <p>
                Whatever matters to people, matters to us. That’s why we create
                ideas and activations that work across platforms while inspiring
                emotional resonance at every touchpoint. At Grey, advertising
                and communications doesn’t need to be a gamble.
              </p>
              <p>
                Whatever matters to people, matters to us. That’s why we create
                ideas and activations that work across platforms while inspiring
                emotional resonance at every touchpoint. At Grey, advertising
                and communications doesn’t need to be a gamble.
              </p>
              <p>
                Whatever matters to people, matters to us. That’s why we create
                ideas and activations that work across platforms while inspiring
                emotional resonance at every touchpoint. At Grey, advertising
                and communications doesn’t need to be a gamble.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="thrid">
              <h1>Health & WELLNESS</h1>
              <p>
                Whatever matters to people, matters to us. That’s why we create
                ideas and activations that work across platforms while inspiring
                emotional resonance at every touchpoint. At Grey, advertising
                and communications doesn’t need to be a gamble.
              </p>
              <p>
                Whatever matters to people, matters to us. That’s why we create
                ideas and activations that work across platforms while inspiring
                emotional resonance at every touchpoint. At Grey, advertising
                and communications doesn’t need to be a gamble.
              </p>
              <p>
                Whatever matters to people, matters to us. That’s why we create
                ideas and activations that work across platforms while inspiring
                emotional resonance at every touchpoint. At Grey, advertising
                and communications doesn’t need to be a gamble.
              </p>
            </div>
            <div className="fourth">
              <img src={image2} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
