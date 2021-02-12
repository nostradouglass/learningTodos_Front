import React from "react";

interface SpinnerProps {
  isActive: boolean;
}

const Spinner = ({ isActive }: SpinnerProps) => {
  if (isActive) {
    return (
      <div className="row">
        <div className="col s4"></div>
        <div className="col s4">
            <div className="spinnerBg">
          <div className="preloader-wrapper  active spinner">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="col s4"></div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Spinner;
