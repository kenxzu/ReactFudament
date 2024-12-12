import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Counter from "./counter.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false,
    };

    this.handleMountCounter = this.handleMountCounter.bind(this);
    this.handleUnmountCounter = this.handleUnmountCounter.bind(this);
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Math.floor(Math.random() * 100) });
    this.toggleError = () =>
      this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }

  handleMountCounter() {
    this.setState({ mount: true });
  }

  handleUnmountCounter() {
    this.setState({ mount: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleMountCounter}>Mount Counter</button>
        <button onClick={this.handleUnmountCounter}>Unmount Counter</button>
        <button onClick={this.ignoreProp}>IgnoreProp</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        <button onClick={this.toggleError}>Toglle Error</button>
        {this.state.mount ? (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          />
        ) : null}
      </div>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
