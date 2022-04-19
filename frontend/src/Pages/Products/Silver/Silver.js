import React from "react";
import { Col, Container } from "react-bootstrap";
import anklet from "../../../images/silver/anklet.png";
import bangle from "../../../images/silver/bangle.png";
import braclet from "../../../images/silver/bracelet.png";
import chain from "../../../images/silver/chain.png";
import fingerring from "../../../images/silver/fingerring.jpg";
import others from "../../../images/silver/others.png";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../NavBar/NavBar";

const Silver = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1> Our Silver Products</h1>
      <Container style={{ width: "90%" }} className="row mb-5 ml-5  mx-auto">
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={anklet} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Anklet</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5 box " src={bangle} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Bangle</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={braclet} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Bracelet</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={chain} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Chain</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={fingerring} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Finger ring</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box" src={others} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Others</h5>{" "}
          </button>
        </Col>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Silver;
