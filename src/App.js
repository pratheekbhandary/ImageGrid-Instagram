import React, { Component, Fragment } from "react";

import UserImages from "./utils";
import Header from "./component/Header";
import ImageGrid from "./container/ImageGrid";

import "./main.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    UserImages.getUserImages().then(imagesArr => {
      console.log(imagesArr);
      this.setState({ images: new UserImages(imagesArr).images });
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <ImageGrid imagesArray={this.state.images} />
        </div>
      </Fragment>
    );
  }
}

export default App;
