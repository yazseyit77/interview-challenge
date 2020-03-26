import React, { Component } from "react";
import data from "../json/data.json";
import { Container, Grid, Image, Item } from "semantic-ui-react";
import Nav from "./nav.js";
import One from "./img/one.png";

export default class Balance extends Component {
  render() {
    const { balances } = data;
    return (
      <div>
        <Nav />
        <br />
        <br />
        <Container>
          <br />
          <br />
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={4}>
                <Image src={One} alt="Not found" />
              </Grid.Column>
              <Grid.Column width={9}>
                <Item>
                  <Item.Content>
                    <Item.Header as="h1">Balances</Item.Header>
                    <Item.Header as="h4">
                      Account holder: {balances.min}
                    </Item.Header>
                    <Item.Header as="h4">Bank: {balances.min}</Item.Header>
                    <Item.Description>
                      Account #: {balances.min}
                    </Item.Description>
                    <Item.Description>
                      Account status: {balances.min}
                    </Item.Description>
                    <Item.Description>
                      Account Type: {balances.min}
                    </Item.Description>
                    <Item.Extra>Available balance: ${balances.min}</Item.Extra>
                    <Item.Extra>Last updated: {balances.min}</Item.Extra>
                  </Item.Content>
                </Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
