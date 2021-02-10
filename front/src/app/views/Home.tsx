import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <br />
            <h1 className="header center light-blue-text text-lighten-2">
              Kelly Douglass
            </h1>
            <div className="row center">
              <h5 className="header col s12 white-text">Software Engineer</h5>
            </div>
            <div className="row center">
              <Link
                to="/mongo"
                className="btn-large waves-effect waves-light light-blue "
              >
                Login
              </Link>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="parallax">
          <img src="/images/cubes.jpg" alt="Unsplashed background cubes" />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">laptop_mac</i>
                </h2>
                <h5 className="center light-blue-text">Front End Knowledge</h5>

                <p className="white-text">
                  Html, css, React, Sass, Webpack, axios
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">storage</i>
                </h2>
                <h5 className="center light-blue-text">Back end Knowledge</h5>

                <p className="white-text">
                  Node, Express, Mongo, Postgres, mongoose, sequalize, graphql
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">api</i>
                </h2>
                <h5 className="center light-blue-text">Other Skills</h5>

                <p className="white-text">
                  Javascript, Typescript, axios, Rest, React Native, Swift,
                  SwiftUI, AWS, Photoshop, Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light">
                Full Stack development using modern technologies.{" "}
              </h5>
            </div>
          </div>
        </div>

        <div className="parallax">
          <img
            src="/images/deskComputers.jpg"
            alt="Unsplashed background img 2"
          />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3>
                <i className="mdi-content-send brown-text"></i>
              </h3>
              <h4 className="light-blue-text">Contact</h4>
              <p className="center-align white-text">
                email:{" "}
                <a href="mailto: kdouglass@gmail.com">kdouglass@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light">
                Over five years experience buildign front and back end systems.
              </h5>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src="/images/computer.jpg" alt="Unsplashed background img 3" />
        </div>
      </div>

      <footer className="page-footer light-blue">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Kelly Douglass</h5>
              <p className="grey-text text-lighten-4">
                A self taught developer with a continueing interest in learning
                new skills and technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by{" "}
            <a
              className="white-text text-lighten-3"
              href="http://kellydouglass.com"
            >
              Kelly Douglass
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
