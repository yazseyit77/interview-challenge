import React, { Component } from "react";
import { Menu, Image, Input, Icon } from "semantic-ui-react";
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
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              action={{
                color: "teal",
                icon: "search"
              }}
              placeholder="Search..."
            />
          </Menu.Item>
          <Menu.Item
            name="call"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          >
            <span>Call</span>
            <Icon id="rightPush" color="teal" name="call" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
