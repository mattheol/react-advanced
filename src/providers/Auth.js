import React from "react";

class Auth extends React.Component {
  state = {
    isAuthorized: false
  };

  toggleAuth = () => {
    this.setState(prevState => ({ isAuthorized: !prevState.isAuthorized }));
  };

  render() {
    const renderProps = {
      isAuthorized: this.state.isAuthorized,
      toggleAuth: this.toggleAuth
    };
    return this.props.render(renderProps);
  }
}

export default Auth;
