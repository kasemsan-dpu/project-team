import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";

const BASE_URL = "https://api-teams.onrender.com/trains";

export default class report extends Component {
  state = {
    data: [],
  };

  getData = async () => {
    try {
      await axios
        .get(`${BASE_URL}`)
        .then((response) => {
          let res = response.data;
          this.setState({
            data: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <div style={{ paddingTop: "15px" }}>
        <Row>
          {data.map((rs, index) => (
            <Col lg="4" md="6" sm="12" key={index}>
              <div style={{ paddingBottom: "25px" }}>
                <Card>
                  <Card.Img variant="top" src={rs.cover} />
                  <Card.Body>
                    <Card.Title>{rs.name}</Card.Title>
                    {rs.category}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
        </div>
      </div>
    );
  }
}
