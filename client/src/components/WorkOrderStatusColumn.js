import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

const style = {
  flex: 1,
  margin: "1.5%",
  minWidth: "15%",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  backgroundColor: "#fff",
  boxShadow: "rgba(40, 40, 40, 0.2) 1px 1px 17px 2px"
};

const columnTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

class ApplicationStatusColumn extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired
  };

  render() {
    const { value, label, accepts, options, connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{ ...style }}>
        <h1 style={{ color: "black" }}>{label}</h1>
        {options}
      </div>
    );
  }
}

export default DropTarget(
  props => props.accepts,
  columnTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
  })
)(ApplicationStatusColumn);
