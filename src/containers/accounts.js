import React, { Component } from "react";
import data from "../json/data.json";
import { Container, Grid, Image, Item } from "semantic-ui-react";
import Nav from "./nav.js";
import Two from "./img/two.png";

export default class Accounts extends Component {
  render() {
    const { account } = data.accounts;
    var d = new Date(account[0].lastUpdated).toDateString();
    debugger;
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
                <Image src={Two} alt="Not found" />
              </Grid.Column>
              <Grid.Column width={9}>
                <Item>
                  <Item.Content>
                    <Item.Header as="h1" id="fontWeightHeavy">
                      Account
                    </Item.Header>
                    <Item.Header as="h4">
                      Account holder:{" "}
                      <span id="textPrimary">
                        {account[0].displayedName
                          .toLowerCase()
                          .split(" ")
                          .map(r => r.charAt(0).toUpperCase() + r.substring(1))
                          .join(" ")}
                      </span>
                    </Item.Header>
                    <Item.Header as="h4">
                      Bank:{" "}
                      <span id="textPrimary">{account[0].accountName}</span>
                    </Item.Header>
                    <Item.Description>
                      Account number:{" "}
                      <span id="textSecondary">{account[0].accountNumber}</span>
                    </Item.Description>
                    <Item.Description>
                      Account status:{" "}
                      <span id="textSecondary">
                        {account[0].accountStatus[0].toUpperCase() +
                          account[0].accountStatus.slice(1).toLowerCase()}
                      </span>
                    </Item.Description>
                    <Item.Description>
                      Account Type:{" "}
                      <span id="textSecondary">
                        {account[0].accountType[0].toUpperCase() +
                          account[0].accountType.slice(1).toLowerCase()}
                      </span>
                    </Item.Description>
                    <Item.Extra>
                      Available balance:{" "}
                      <span id="textSecondary">
                        ${account[0].availableBalance.amount}
                      </span>
                    </Item.Extra>
                    <Item.Extra>
                      Last updated: <span id="textSecondary">{d}</span>
                    </Item.Extra>
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
