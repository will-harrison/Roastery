import React, { Component } from "react";
import styled from "styled-components";
import { format, parse } from "date-fns";
import api from "../api";
import PageHeader from "../components/PageHeader";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filters: {},
      sortOrder: [
        "greenBulk",
        "roastedBulk",
        "bagged10",
        "bagged5",
        "bagged1",
        "bagged12oz"
      ]
    };
  }

  componentDidMount() {
    api.inventory.getAll().then(items => {
      this.setState(state => {
        return {
          ...state,
          items
        };
      });
    });
  }

  render() {
    let { items, sortOrder } = this.state;
    return (
      <div>
        <PageHeader>Inventory</PageHeader>
        {items.map(i => (
          <Item key={i.id}>
            <ItemName>{i.item.name}</ItemName>
            <ItemDescription>
              <i>{i.item.description}</i>
            </ItemDescription>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>On Hand</th>
                  <th>On Order</th>
                  <th>Next Due Date</th>
                </tr>
              </thead>
              <tbody>
                {sortOrder.map((j, index) => (
                  <TR key={index}>
                    <TD>
                      <InvType>{i.inventory[j].type}</InvType>
                    </TD>
                    <TD>
                      <Qty>{i.inventory[j].onHand}</Qty>
                    </TD>
                    <TD>
                      <Qty>{i.inventory[j].onOrder}</Qty>
                    </TD>
                    <TD>
                      <Qty>
                        {i.inventory[j].nextDueDate &&
                          format(
                            parse(i.inventory[j].nextDueDate),
                            "MM/DD/YYYY"
                          )}
                      </Qty>
                    </TD>
                  </TR>
                ))}
              </tbody>
            </table>
          </Item>
        ))}
      </div>
    );
  }
}

const Item = styled.div`
  padding-top: 40px;
  padding-left: 50px;
`;

const ItemName = styled.div`font-size: 24px;`;

const ItemDescription = styled.div`
  padding-bottom: 10px;
  line-height: 2;
`;

const Inv = styled.div`margin-left: 15px;`;

const InvType = styled.div`font-size: 20px;`;

const InvRow = styled.div``;

const Qty = styled.div`
  margin-left: 25px;
  font-size: 20px;
`;

const QtyText = styled.span``;

const TR = styled.tr``;

const TD = styled.td`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2px 20px;
`;

export default Inventory;
