import React from 'react'

type HomeItemProps = {
    icon: string
    title: string
    subText: string
}

const HomeItem = ({icon, title, subText}: HomeItemProps) => {
    return (
        <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons">{icon}</i>
                  </h2>
                  <h5 className="center light-blue-text">{title}</h5>

                  <p className="white-text center-align">
                    {subText}
                  </p>
                </div>
              </div>
    )
}

export default HomeItem