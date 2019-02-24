import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2 className="pageTitle"> IG-Insta</h2>
        <div className="navContainer">
          <button className="navItem">Home</button>
          <button className="navItem">Logout</button>
        </div>
      </header>
    );
  }
}
