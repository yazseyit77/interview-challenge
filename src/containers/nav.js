import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import Trans from "./img/trans.jpg";

export default class Nav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable inverted>
        <Menu.Item>
          <Image src={Trans} size="tiny" verticalAlign="middle" />
        </Menu.Item>
        <Menu.Item
          name="home"
          href="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="account"
          href="/account"
          active={activeItem === "account"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="balances"
          href="/balances"
          active={activeItem === "balances"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="about"
          href="/about"
          active={activeItem === "transactions"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
