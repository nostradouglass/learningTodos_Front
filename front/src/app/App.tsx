import React from "react";
import ReactDOM from "react-dom";
import './sass/bundle.scss'


const App = () => {
  return <div className="blue-text text-darken-2 ">Development Tools: Learning Todo Checklist</div>;
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
