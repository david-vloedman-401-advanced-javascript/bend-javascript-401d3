import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.setState(prevState => {
      return { number: prevState.number + 1 };
    });
  }

  decrementButtonClick = e => {
    e.preventDefault();
    this.setState({ number: this.state.number - 1 });
  };

  handleNumber = e => {
    e.preventDefault();
    let number = parseInt(e.target.value, 10);
    this.setState({ number });
  };

  render() {
    let numberStyle = {
      color: "teal"
    };

    if (this.state.number > 0) numberStyle.color = "orange";
    if (this.state.number < 0) numberStyle.color = "red";

    return (
      <section>
        <h4 style={numberStyle}>The number is: {this.state.number}</h4>
        <button id="buttonup" onClick={this.handleButtonClick}>
          Increment
        </button>
        <button id="buttondown" onClick={this.decrementButtonClick}>
          Decrement
        </button>

        <form>
          <h3>Testing</h3>
          <input
            onChange={this.handleNumber}
            type="number"
            placeholder="Enter to win a free trip"
          />
        </form>
      </section>
    );
  }
}

export default Counter;
