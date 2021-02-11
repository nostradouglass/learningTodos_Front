import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Modal from "react-modal";

import firebase from "firebase/app";
import "firebase/auth";

Modal.setAppElement("#root");

const Home = () => {
  var subtitle: any;
  const [signedIn, setSignedIn] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#06A8F4";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        setSignedIn(true);
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

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
              {/* <Link
                to="/mongo"
                className="btn-large waves-effect waves-light light-blue "
              >
                Login
              </Link> */}

              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Login Modal"
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign In</h2>

                <div className="login">
                  <h1>Login</h1>
                  <form onSubmit={submitLogin}>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      value={email}
                      type="text"
                      name="u"
                      placeholder="email"
                      required={true}
                    />
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPass(e.target.value)
                      }
                      value={pass}
                      type="password"
                      name="p"
                      placeholder="Password"
                      required={true}
                    />
                    <button
                      type="submit"
                      // className="btn btn-primary btn-block btn-large"
                      className="btn waves-effect waves-light white light-blue-text"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </Modal>

              <button className="btn-large  light-blue " onClick={openModal}>
                Sign in
              </button>
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
                Over five years experience building front and back end systems.
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

const customStyles = {
  content: {
    background: "#03a9f4",
    borderRadius: "10px",
    width: "500px",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default Home;
