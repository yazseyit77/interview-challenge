import React, { Component } from "react";
import { Container, Button, Item } from "semantic-ui-react";
import Nav from "./nav.js";
import data from "../json/data.json";
import Three from "./img/three.png";

class Home extends Component {
  render() {
    const { trxs } = data;
    const { TOTAL } = data.trxs_count.transaction;
    const transactions = trxs.transaction.map(tr => (
      <Item>
        <Item.Image src={Three} alt="Image not found" />
        <Item.Content>
          <Item.Header as="h3" id="textPrimary">
            Payment type:{" "}
            {tr.baseType[0].toUpperCase() + tr.baseType.slice(1).toLowerCase()}
          </Item.Header>
          <Item.Description id="textSecondary">
            Description:{" "}
            {tr.description.original[0].toUpperCase() +
              tr.description.original.slice(1).toLowerCase()}
          </Item.Description>
          <Item.Description id="textSecondary">
            - Transaction date: {tr.date}
          </Item.Description>
          <Item.Description id="textSecondary">
            <span className="cinema">- Transcation ID: {tr.id} | </span>
            <span className="cinema">Category ID: {tr.categoryId}</span>
          </Item.Description>
          <Item.Extra>
            <Button href="/account">Account</Button>
            <Button href="/balances">Balance</Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    ));

    return (
      <div>
        <Nav />
        <Container>
          <br />
          <br />
          <Container textAlign="center">
            <h1>Welcome to my account</h1>
            <h5>Please feel free to explore my transactions:</h5>
            <h5>
              Total: <span id="textSuccess">{TOTAL.count} transactions</span>
            </h5>
          </Container>
          <br />
          <br />
          <Item.Group divided>{transactions}</Item.Group>
        </Container>
      </div>
    );
  }
}

export default Home;
