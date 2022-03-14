import React from "react";
import axios from "axios";
const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    state = {
      data: [],
    };
    async componentDidMount() {
      const { data } = await axios.get(this.props.dataSource);
      this.setState({ data: data });
    }
    render() {
      const { dataSource, ...otherProps } = this.props;
      return this.state.data.length < 1 ? (
        <h1 style={{ color: "white" }}>Loading</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      );
    }
  }
  return WithData;
};

export default withData;
