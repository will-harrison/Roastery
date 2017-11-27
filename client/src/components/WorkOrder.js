import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import styled from "styled-components";

const style = {
  cursor: "move",
  color: "black",
  float: "left"
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  }
};

const WorkOrder = ({ name, pounds, type, isDragging, connectDragSource }) =>
  connectDragSource(
    <div style={style}>
      <Dragbox>
        {pounds} pounds of {name}
      </Dragbox>
    </div>
  );

const Dragbox = styled.div`
  background-color: #eee;
  border: 1px solid darkgrey;
  padding: 0.5rem 1rem;
  margin: 2px;
`;

export default DragSource(
  props => props.type,
  boxSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(WorkOrder);
