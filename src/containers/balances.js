import React, { Component } from "react";
import data from "../json/data.json";
import { Container, Table, Grid, Image, Item } from "semantic-ui-react";
import Nav from "./nav.js";
import One from "./img/one.png";

export default class Balance extends Component {
  render() {
    const { balances } = data;
    const ids = balances[0].daily_labels.map(i => console.log(i));
    return (
      <div>
        <Nav />
        <br />
        <Container textAlign="center">
          <Item.Header as="h1" id="fontWeightHeavy">
            Balances
          </Item.Header>
          <br />

          <Table celled fixed singleLine color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>4</Table.HeaderCell>
                <Table.HeaderCell>5</Table.HeaderCell>
                <Table.HeaderCell>6</Table.HeaderCell>
                <Table.HeaderCell>7</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{balances[0].id}</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell
                  title={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                    "et dolore magna aliqua."
                  ].join(" ")}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Shorter description</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Shorter description</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br />
          <Table celled fixed singleLine color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>4</Table.HeaderCell>
                <Table.HeaderCell>5</Table.HeaderCell>
                <Table.HeaderCell>6</Table.HeaderCell>
                <Table.HeaderCell>7</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell
                  title={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                    "et dolore magna aliqua."
                  ].join(" ")}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Shorter description</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>Shorter description</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br />
          <br />
        </Container>
        <div class="ui inverted vertical footer segment form-page">
          <div class="ui container">
            <span>Copyright &copy; 2020.</span> | All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}
