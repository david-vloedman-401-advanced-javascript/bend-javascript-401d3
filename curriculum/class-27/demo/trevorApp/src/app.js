import React from "react";
import Footer from "./footer";
import Header from "./header";
import Counter from "./counter";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
