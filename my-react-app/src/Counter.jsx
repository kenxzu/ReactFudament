import { Component } from "react";

const ErrorComponet = () => <div> {props.ignore}</div>;

class Counter extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = { currentCount: 0, seed: 0 };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        currentCount: props.seed, // Syncing with currentCount
      };
    }
    return null;
  }

  incrementCount() {
    const newCount = this.state.currentCount + 1;
    this.setState({ currentCount: newCount });
  }

  decrementCount() {
    const newCount = this.state.currentCount - 1;
    this.setState({ currentCount: newCount });
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldComponentUpdate - DONOT RENDER");
      return false;
    }

    console.log("shouldComponentUpdate - render");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    console.log("rederer");

    if (this.props.showErrorComponent && this.state.error) {
      return <div>We havee enccunter an error! {this.state.message}</div>;
    }
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <p>Current Count: {this.state.currentCount}</p>
        {this.props.showErrorComponent ? <ErrorComponet /> : null}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("------------------");
    console.log("Previous State:", prevState);
    console.log("New State:", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("------------------");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    console.log("------------------");
    this.setState({ error, info });
  }
}

export default Counter;
