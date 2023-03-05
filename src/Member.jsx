import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class Member extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
          <div align="left">
              <h3>สมาชิก Project Team</h3>
              <h4>Kasemsan Kenutum : 65130896</h4>
              <h4>Nueochon Kaewjittawong : 65130841</h4>
              <h4>Sunthanath Poukachamnan : 65130923</h4>
              <h4>Komchan Rerkvises : 65130904</h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
