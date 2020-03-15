import { Component } from "react";

class Collapse extends Component {
  state = {
    isCollapsed: true
  };

  toggle = () => {
    this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  };

  render() {
    return this.props.render({
      isCollapsed: this.state.isCollapsed,
      toggle: this.toggle
    });
  }
}

export default Collapse;
