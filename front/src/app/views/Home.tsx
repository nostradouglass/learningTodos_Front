import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Modal from "react-modal";
import Spinner from '../components/Spinner'

import firebase from "firebase/app";
import "firebase/auth";
import HomeItem from "../components/HomeItem";

Modal.setAppElement("#root");

const Home = () => {
  var subtitle: any;
  const [signedIn, setSignedIn] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    var user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      setSignedIn(true);
    }
  });

  function openModal() {
    if (signedIn) {
      setRedirect(true);
    } else {
      setIsOpen(true);
    }
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
    setisLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        setSignedIn(true);
        setisLoading(false)
        var user = userCredential.user;
        setSignedIn(true);
        setRedirect(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const showLoading = () => {
    if (isLoading) {
      return <Spinner isActive={isLoading} />
    } else {
      return <h1>Login</h1>
    }
  }


  if (redirect) {
    return <Redirect to="/mongo" />;
  } else {
    return (
      <div className="base">
        <div id="index-banner" className="parallax-container ">
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
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Login Modal"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign In</h2>



                  <div className="login">
                  {showLoading()}
                   
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
            <img src="/images/med/cubes-med.jpg" alt="cubes background" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <HomeItem
                icon="laptop_mac"
                title="Front End Knowledge"
                subText="Html, Css, React, Sass, Webpack, axios"
              />

              <HomeItem
                icon="storage"
                title="Back end Knowledge"
                subText="Node, Express, Mongo, Postgres, mongoose, sequalize, graphql"
              />
              <HomeItem
                icon="api"
                title="Other Skills"
                subText="Javascript, Typescript, axios, Rest, React Native, Swift,
                    SwiftUI, AWS, Photoshop, Illustrator"
              />
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
              src="/images/med/deskComputers-med.jpg"
              alt="desk with computers on it"
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
                  Over five years experience building front and back end
                  systems.
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src="/images/med/computer-med.jpg" alt="computer with code" />
          </div>
        </div>

        <footer className="page-footer light-blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Kelly Douglass</h5>
                <p className="grey-text text-lighten-4">
                  A self taught developer with a continueing interest in
                  learning new skills and technologies.
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
  }
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
