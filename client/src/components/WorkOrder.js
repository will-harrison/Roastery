import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import styled from "styled-components";
import { Card, Container } from "semantic-ui-react";

const style = {
  cursor: "move",
  color: "black"
};

const boxSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

const WorkOrder = ({ item, orderQty, type, isDragging, connectDragSource }) =>
  connectDragSource(
    <div style={style}>
      <Card raised>
        <Card.Content
          fluid
          header={!item ? "" : item.name}
          description={`Qty: ${orderQty} lbs`}
        />
      </Card>
    </div>
  );
export default DragSource(
  props => props.type,
  boxSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(WorkOrder);
