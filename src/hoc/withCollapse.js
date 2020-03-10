import React from "react";

const withCollapse = Component => {
  return class ComponentClass extends React.Component {
    state = {
      isCollapsed: false
    };

    toggle = () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed
      }));
    };

    render() {
      return (
        <Component
          toggle={this.toggle}
          isCollapsed={this.state.isCollapsed}
          {...this.props}
        />
      );
    }
  };
};

export default withCollapse;
