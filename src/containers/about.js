import React, { Component } from "react";
import { Container, Image, Grid } from "semantic-ui-react";
import Nav from "./nav.js";
import Web from "./img/icon.png";
import Internet from "./img/internet.png";
import Resume from "./img/resume.png";
import Avatar from "./img/avatar-circle.png";

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container textAlign="center">
          <Image src={Avatar} size="small" circular centered />
          <h1>Yazgeldi Seyidov</h1>
          <Grid>
            <Grid.Row centered columns={2}>
              <Grid.Column textAlign="center">
                <h5>
                  Full Stack developer proficient in Ruby on Rails, JavaScript
                  and React with over 2 years experience. Having a passion for
                  the tech world since childhood, I discovered Web Development
                  through my role as an Inventory Manager. Desire to learn, love
                  programming, and my superpowers are strong communication
                  skills, enjoy helping my friends and team, and being a good
                  listener.
                </h5>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={8}>
              <Grid.Column textAlign="center">
                <a href="https://yazseyit.com/">
                  <Image src={Web} size="tiny" avatar />
                  <span>
                    <h3>Portfolio 1</h3>
                  </span>
                </a>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <a href="https://yazseyit77.github.io/portfoliopage/">
                  <Image src={Internet} size="tiny" avatar />
                  <span>
                    <h3>Portfolio 2</h3>
                  </span>
                </a>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <a href="https://drive.google.com/file/d/1oubUNVsAIDVY54wSVQeJI8r6VwVS0WFM/view?usp=sharing">
                  <Image src={Resume} size="tiny" avatar />
                  <span>
                    <h3>Resume</h3>
                  </span>
                </a>
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

export default About;
