import React, { Component } from "react";
import data from "../json/data.json";
import { Container, Table, Item, Image } from "semantic-ui-react";
import Nav from "./nav.js";
import One from "./img/one.png";

export default class Balance extends Component {
  render() {
    const { balances } = data;
    return (
      <div>
        <Nav />
        <br />
        <Container textAlign="center">
          <Item.Header as="h1" id="fontWeightHeavy">
            <Image src={One} size="mini" verticalAlign="middle" alt="" />
            <span id="rightPush">Balances</span>
          </Item.Header>
          <Table celled fixed singleLine color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="6" textAlign="center">
                  Table ID:<span id="textSecondary"> {balances[0].id}</span>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Daily labels</Table.HeaderCell>
                <Table.HeaderCell>Daily values</Table.HeaderCell>
                <Table.HeaderCell>Max</Table.HeaderCell>
                <Table.HeaderCell>Min</Table.HeaderCell>
                <Table.HeaderCell>Month labels</Table.HeaderCell>
                <Table.HeaderCell>Month average values</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>2019-03-07</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>$-452.36</Table.Cell>
                <Table.Cell>Mar</Table.Cell>
                <Table.Cell>$111.29</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2019-03-07</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>Apr</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2019-03-07</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>May</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table celled fixed singleLine color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Month max</Table.HeaderCell>
                <Table.HeaderCell>Month min</Table.HeaderCell>
                <Table.HeaderCell>Day of week labels</Table.HeaderCell>
                <Table.HeaderCell>Day of week average values</Table.HeaderCell>
                <Table.HeaderCell>Day of week max</Table.HeaderCell>
                <Table.HeaderCell>Day of week min</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>$111.29</Table.Cell>
                <Table.Cell>Mon</Table.Cell>
                <Table.Cell>$191.87</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>$140.86</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>Tue</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>Wed</Table.Cell>
                <Table.Cell>$192.79</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br />
          <br />
        </Container>
      </div>
    );
  }
}
