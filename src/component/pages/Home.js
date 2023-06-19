import React from "react";
import "../../styles/Home/home.css";
import image1 from "../../image/img1.jpg";
import image2 from "../../image/img2.jpg";
import image3 from "../../image/img3.jpg";

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
              <h1>Health & Wellness</h1>
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
          <div className="newContent">
            <div className="contentHeading">
              <h1>
                {/* At */}
                <span> NOTCH HILL </span> <br /> Famously Effective Work is the
                Rule, Not the Exception.
              </h1>
            </div>
            <div className="feedInfo">
              <div className="section1">
                <section>
                  <img src={image3} alt="" />
                  <article>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </article>
                </section>
              </div>
              <div className="section2">
                <h1>Travel Guide</h1>
                <p>
                  Whatever matters to people, matters to us. That’s why we
                  create ideas and activations that work across platforms while
                  inspiring emotional resonance at every touchpoint. At Grey,
                  advertising and communications doesn’t need to be a gamble.
                </p>
                <p>
                  Whatever matters to people, matters to us. That’s why we
                  create ideas and activations that work across platforms while
                  inspiring emotional resonance at every touchpoint. At Grey,
                  advertising and communications doesn’t need to be a gamble.
                </p>
                <p>
                  Whatever matters to people, matters to us. That’s why we
                  create ideas and activations that work across platforms while
                  inspiring emotional resonance at every touchpoint. At Grey,
                  advertising and communications doesn’t need to be a gamble.
                </p>
                <p>
                  Whatever matters to people, matters to us. That’s why we
                  create ideas and activations that work across platforms while
                  inspiring emotional resonance at every touchpoint. At Grey,
                  advertising and communications doesn’t need to be a gamble.
                </p>
              </div>
            </div>
            <div className="gallery">
              <div className="displayImage">
                <img src={image1} alt="img" />
                <img src={image2} alt="img" />
                <img src={image3} alt="img" />
                <img src={image1} alt="img" />
              </div>
            </div>
            <div className="client">
              <div className="innerClass">
                <div className="child1">
                  <h1>It Takes a Village to Raise a Brand.</h1>
                </div>
                <div className="child2">
                  <p>
                    Grey is proud to be part of AKQA, an international family of
                    autonomous agencies with a shared mission, values and an
                    independent mindset to nurture breakthrough work on behalf
                    of the clients and audiences we collectively serve.
                  </p>
                </div>
                <div className="child3">
                  <h1>Travel</h1>
                  <h1>Health Care</h1>
                  <h1>Guide</h1>
                  <h1>Client4</h1>
                  <h1>Client5</h1>
                  <h1>Client6</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
