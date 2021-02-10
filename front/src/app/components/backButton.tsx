import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const BackButton = ({backTo}: {backTo: string}) => {
  const [redirect, setRedirect] = useState(false);

  if (!redirect) {
    return (
      <a
        onClick={() => setRedirect(true)}
        className="waves-effect waves-light btn-small light-blue white-text"
      >
        <i className="material-icons left">arrow_back_ios</i>Back
      </a>
    );
  } else {
    return <Redirect to={`/${backTo}`}></Redirect>;
  }
};

export default BackButton;
