import "./App.scss";
//images import
import croppedTable from "./assets/images/croppedTable.png";
import Wave from "./assets/images/wave.png";
//svg import
import { ReactComponent as Person } from "./assets/svgs/person.svg";
import { ReactComponent as Coin } from "./assets/svgs/coins.svg";
import { ReactComponent as Building } from "./assets/svgs/building.svg";
import { ReactComponent as Puzzle } from "./assets/svgs/puzzle.svg";
import { ReactComponent as Verified } from "./assets/svgs/verified.svg";
import { ReactComponent as Zoom } from "./assets/svgs/zoom.svg";
import { ReactComponent as Nucleus } from "./assets/svgs/nucleus.svg";
import { ReactComponent as Eye } from "./assets/svgs/eye.svg";
import { ReactComponent as Phone } from "./assets/svgs/phone.svg";

//hooks import
import { useState } from "react";
//bootstrap import
import { Container, Row, Col } from "react-bootstrap";
//material ui import
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import { AddSharp } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogContent";

const App = () => {
  //use State
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0); //option
  const [price, setPrice] = useState(0.0);
  const [countDiscover, setCountDiscover] = useState(0);
  const [countProspect, setCountProspect] = useState(0);
  const [countConnect, setCountConnect] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setQuantity(Number(event.target.value));
    let x = Number(event.target.value);
    let perPrice = 0;
    if (x <= 1000) {
      perPrice = 1;
    } else if (x > 1000 && x <= 10000) {
      perPrice = 0.7;
    } else if (x > 10000 && x <= 25000) {
      perPrice = 0.5;
    } else if (x > 25000 && x <= 50000) {
      perPrice = 0.4;
    } else if (x > 50000 && x <= 100000) {
      perPrice = 0.3;
    } else if (x > 100000 && x <= 200000) {
      perPrice = 0.25;
    } else if (x > 200000 && x <= 500000) {
      perPrice = 0.2;
    } else if (x > 500000 && x <= 1000000) {
      perPrice = 0.15;
    } else if (x > 1000000) {
      perPrice = 0.1;
    }
    let ans = perPrice * x;
    setPrice(perPrice);
    setTotalPrice(ans.toFixed(2));
  };
  const incrementDiscover = () => {
    setCountDiscover((prevCount) => prevCount + 1);
  };
  const decrementDiscover = () => {
    if (countDiscover > 0) {
      setCountDiscover((prevCount) => prevCount - 1);
    }
  };
  const incrementProspect = () => {
    setCountProspect((prevCount) => prevCount + 1);
  };
  const decrementProspect = () => {
    if (countProspect > 0) {
      setCountProspect((prevCount) => prevCount - 1);
    }
  };
  const incrementConnect = () => {
    setCountConnect((prevCount) => prevCount + 1);
  };
  const decrementConnect = () => {
    if (countProspect > 0) {
      setCountConnect((prevCount) => prevCount - 1);
    }
  };
  const sumRecurring = () => {
    const calc = (countProspect + countConnect) * 500;
    return calc;
  };
  const calculateSum = () => {
    let sum =
      7200 +
      Number(totalPrice) +
      countConnect * 200 +
      countProspect * 125 +
      countDiscover * 50;
    if (checked === true) {
      console.log(checked);
      sum = sum + 10000;
    }
    let res = Number(sum);
    return <span>$ {res.toFixed(2)}</span>;
  };
  return (
    <>
      <Row>
        <img src={Wave} alt="kgkug" />
      </Row>
      <Container
        style={{
          border: "2px solid #616680",
          color: "#1c3b71",
          fontSize: 20,
          backgroundColor: "#fff",
          fontFamily: "PlusJakartaSans-Regular",
          transform: "translateY(-175px)",
        }}
      >
        {/* ---------------First Row Start------------------- */}
        <Row
          style={{
            backgroundColor: "#1C3B71",
            color: "#fff",
            textAlign: "center",
            fontFamily: "PlusJakartaSans-Bold",
          }}
        >
          <h3 style={{ padding: "0.7rem" }}>Pricing Plan</h3>
        </Row>
        {/* ---------------First Row End------------------- */}
        {/* ---------------Second Row Start------------------- */}
        <Row>
          <Row
            style={{
              padding: "1rem 2.5rem 0rem 2.5rem",
              // paddingBotton: 0,
            }}
          >
            <Row
              style={{
                fontFamily: "PlusJakartaSans-SemiBold",
                fontSize: 25,
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <Col>Base Plan(Annually):</Col>
              <Col style={{ textAlign: "right", fontSize: 30 }}>
                $7,200<sup>.00</sup>
              </Col>
            </Row>
            <Row
              style={{
                textDecoration: "underline",
                paddingBottom: "2rem",
              }}
            >
              <Col>What You Get:</Col>
            </Row>
            {/* ------------------Grid Begin------------------------ */}
            <Row style={{ fontFamily: "PlusJakartaSans-Medium" }}>
              {/* ------------ Grid=> 1st Row Begin------------- */}
              <Row>
                {/* ------------ Grid=> 1st Row 1st Column Begin------------- */}
                <Col
                  style={{ borderRight: "2px solid rgba(112,112,112,0.25)" }}
                >
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Person />
                    </Col>
                    <Col>
                      1 User License
                      <br />
                      (Discover)
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 1st Row 1st Column End------------- */}
                {/* ------------ Grid=> 1st Row 2nd Column Begin------------- */}
                <Col
                  style={{ borderRight: "2px solid rgba(112,112,112,0.25)" }}
                >
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Coin />
                    </Col>
                    <Col>
                      10,000 Bulk
                      <br />
                      Coins
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 1st Row 2nd Column End------------- */}
                {/* ------------ Grid=> 1st Row 3nd Column Begin------------- */}
                <Col>
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Phone />
                    </Col>
                    <Col>
                      Mobile
                      <br />
                      Phone Data
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 1st Row 3nd Column End------------- */}
              </Row>
              {/* ------------ Grid=> 1st Row End------------- */}
              <Divider sx={{ border: "1px solid rgba(112,112,112,1)" }} />
              {/* ------------ Grid=> 2nd Row Begin------------- */}
              <Row>
                {/* ------------ Grid=> 2nd Row 1st column Begin------------- */}
                <Col
                  style={{ borderRight: "2px solid rgba(112,112,112,0.25)" }}
                >
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Building />
                    </Col>
                    <Col>
                      Multi-Source
                      <br />
                      Intent
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 2nd Row 1st column End------------ */}
                {/* ------------ Grid=> 2nd Row 2nd column Begin------------- */}
                <Col
                  style={{ borderRight: "2px solid rgba(112,112,112,0.25)" }}
                >
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Nucleus />
                    </Col>
                    <Col style={{ alignItems: "center" }}>Technographics</Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 2nd Row 2nd column End------------ */}
                {/* ------------ Grid=> 2nd Row 3rd column Begin------------- */}
                <Col>
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Eye style={{ alignItems: "center" }} />
                    </Col>
                    <Col>
                      Unlimited In-app
                      <br />
                      Views
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 2nd Row 3rd column End------------- */}
              </Row>
              {/* ------------ Grid=> 2nd Row End------------- */}
              <Divider sx={{ border: "1px solid rgba(112,112,112,1)" }} />
              {/* ------------ Grid=> 3rd Row Begin------------ */}
              <Row>
                {/* ------------ Grid=> 3rd Row 1st Colum Begin------------ */}
                <Col
                  style={{ borderRight: "2px solid rgba(112,112,112,0.25)" }}
                >
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Puzzle />
                    </Col>
                    <Col>
                      Chrome
                      <br />
                      Extension
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 3rd Row 1st Colum End------------ */}
                {/* ------------ Grid=> 3rd Row 2nd Colum Begin------------ */}
                <Col
                  style={{ borderRight: "2px solid rgba(112,112,112,0.25)" }}
                >
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Verified />
                    </Col>
                    <Col>
                      Real-Time
                      <br />
                      Verification
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 3rd Row 2nd Colum End------------ */}
                {/* ------------ Grid=> 3rd Row 3rd Column Begin------------ */}
                <Col>
                  <Row style={{ padding: "1rem 1.5rem" }}>
                    <Col lg={{ span: 3 }}>
                      <Zoom />
                    </Col>
                    <Col>
                      Advanced
                      <br />
                      Research
                    </Col>
                  </Row>
                </Col>
                {/* ------------ Grid=> 3rd Row 3rd Column End------------ */}
              </Row>
              {/* ------------ Grid=> 3rd Row End------------ */}
            </Row>
            {/* -------------Grid End ----------------------------------*/}
          </Row>
          <Divider sx={{ borderColor: "#61680", borderWidth: 1, opacity: 1 }} />
        </Row>
        {/* ---------------Second Row End------------------- */}
        {/* ----------------THIRD ROW BEGIN------------------- */}
        <Row
          style={{
            border: "1px solid #1C3B71",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <Row
            style={{
              padding: "1.5rem 1rem",
              fontFamily: "PlusJakartaSans-Medium",
              fontSize: 20,
            }}
          >
            <Col lg={{ span: 4 }}>
              <AddSharp /> Additional Bulk Credits
              <InfoIcon
                sx={{ fontSize: 18, mb: 0.5 }}
                onClick={handleClickOpen}
              />
              <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-description"
              >
                <DialogContent sx={{ p: 0, backgroundColor: "#1c3b71" }}>
                  <DialogTitle
                    sx={{
                      textAlign: "center",
                      fontFamily: "PlusJakartaSans-SemiBold",
                      color: "#fff",
                    }}
                  >
                    <h4>
                      Additional Bulk Credits{" "}
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: "absolute",
                          right: 10,
                          top: 14,
                          color: "#fff",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </h4>
                  </DialogTitle>
                  <DialogContentText sx={{ p: "0 1rem 1rem 1rem" }}>
                    <img
                      src={croppedTable}
                      style={{ height: 500 }}
                      alt="kjhjg"
                    />
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Col>
            <Col style={{ textAlign: "right" }}>
              {/* -------span-1-------- */}
              <span style={{ marginRight: 15 }}>
                {" "}
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                  style={{
                    width: 110,
                    border: "1px solid #616680",
                    textAlign: "center",
                    fontSize: 17,
                    color: "#616680",
                    marginLeft: 5,
                  }}
                />
              </span>
              {/* --------span-2-------S */}
              <span style={{ marginRight: 15 }}>
                {" "}
                Price/Credits:
                <span
                  style={{
                    border: "1px solid #616680",
                    background: "#616680",
                    color: "#fff",
                    padding: "0.2rem 1rem",
                    marginLeft: 5,
                  }}
                >
                  $ {price.toFixed(2)}
                </span>
              </span>
              {/* --------span-2--------E */}
              {/* --------span-3--------B */}
              Total Price:
              <span
                style={{
                  border: "1px solid #1C3B71",
                  background: "#1C3B71",
                  color: "#fff",
                  padding: "0.2rem 1rem",
                  marginLeft: 5,
                }}
              >
                ${Number(totalPrice).toFixed(2)}
              </span>
              {/* ---------span-3-------E */}
            </Col>
          </Row>
        </Row>
        {/* ----------------THIRD ROW END------------------- */}
        {/* -----------License Row Start--------------------------- */}
        <Row>
          {/* ------------License Heading BEgin--------- */}
          <Row style={{ padding: "1.5rem 1rem" }}>
            <h3 style={{ fontFamily: "PlusJakartaSans-Bold" }}>
              License Types
            </h3>
          </Row>
          {/* ------------License Heading End--------- */}
          {/* ---------------DISCOVER SECTION STARTS---------------------- */}
          <Row style={{ fontSize: 27 }}>
            <Row>
              <Col>
                <span
                  style={{
                    borderBottom: "1.6px solid #1C3B71",
                    fontFamily: "PlusJakartaSans-SemiBold",
                  }}
                >
                  <AddSharp
                    sx={{ fontFamily: "PlusJakartaSans-Bold", mr: 0.5 }}
                  />
                  Discover
                </span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Row>
                  <Col>
                    {" "}
                    <span style={{ fontFamily: "PlusJakartaSans-Medium" }}>
                      $
                    </span>
                    <span
                      style={{
                        fontFamily: "PlusJakartaSans-Bold",
                        fontSize: 40,
                      }}
                    >
                      50
                    </span>
                    <span
                      style={{
                        verticalAlign: "top",
                        marginTop: 7,
                        // display: "inline-block",
                      }}
                    >
                      /User/Month
                    </span>
                  </Col>
                  <Col lg={{ span: 5, marginTop: 10 }}>
                    <span
                      style={{
                        border: "1px solid #1c3b71",
                      }}
                    >
                      <span
                        style={{
                          background: "#1c3b71",
                          textAlign: "center",
                          color: "#fff",
                          padding: "0rem 0.5rem",
                          cursor: "pointer",
                        }}
                        onClick={decrementDiscover}
                      >
                        -
                      </span>
                      <span
                        style={{
                          textAlign: "center",
                          padding: "0rem 0.5rem",
                          display: "inline-block",
                          width: 70,
                        }}
                      >
                        {countDiscover}
                      </span>
                      <span
                        style={{
                          background: "#1c3b71",
                          textAlign: "center",
                          color: "#fff",
                          padding: "0rem 0.5rem",
                          // display: "inline-block",
                          cursor: "pointer",
                        }}
                        onClick={incrementDiscover}
                      >
                        +
                      </span>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ fontSize: 20 }}>
              {/* <Col> */}
              <ul style={{ marginLeft: 40 }}>
                <li>
                  <span
                    style={{
                      fontFamily: "PlusJakartaSans-Medium",
                      marginRight: 4,
                    }}
                  >
                    All
                  </span>
                  features in base plan
                </li>
              </ul>
              {/* </Col> */}
            </Row>
          </Row>
          {/* ---------------DISCOVER SECTION END---------------------- */}
          {/* --------------Prospect Section Begin----------------- */}
          <Row style={{ fontSize: 27, padding: "1rem", paddingTop: 0 }}>
            <Row>
              <Col>
                <span
                  style={{
                    borderBottom: "1.6px solid #1C3B71",
                    fontFamily: "PlusJakartaSans-SemiBold",
                  }}
                >
                  <AddSharp
                    sx={{ fontFamily: "PlusJakartaSans-Bold", mr: 0.5 }}
                  />
                  Prospect
                </span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Row>
                  <Col>
                    {" "}
                    <span style={{ fontFamily: "PlusJakartaSans-Medium" }}>
                      $
                    </span>
                    <span
                      style={{
                        fontFamily: "PlusJakartaSans-Bold",
                        fontSize: 40,
                      }}
                    >
                      125
                    </span>
                    <span
                      style={{
                        verticalAlign: "top",
                        marginTop: 7,
                        display: "inline-block",
                      }}
                    >
                      /User/Month
                    </span>
                  </Col>
                  <Col lg={{ span: 5, marginTop: 10 }}>
                    <span
                      style={{
                        border: "1px solid #1c3b71",
                        // fontSize: 20,
                      }}
                    >
                      <span
                        style={{
                          background: "#1c3b71",
                          textAlign: "center",
                          color: "#fff",
                          padding: "0rem 0.5rem",
                          cursor: "pointer",
                        }}
                        onClick={decrementProspect}
                      >
                        -
                      </span>
                      <span
                        style={{
                          textAlign: "center",
                          padding: "0rem 0.5rem",
                          display: "inline-block",
                          width: 70,
                        }}
                      >
                        {countProspect}
                      </span>
                      <span
                        style={{
                          background: "#1c3b71",
                          textAlign: "center",
                          color: "#fff",
                          padding: "0rem 0.5rem",
                          cursor: "pointer",
                        }}
                        onClick={incrementProspect}
                      >
                        +
                      </span>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={{ fontSize: 20 }}>
              <ul style={{ marginLeft: 40 }}>
                <li>
                  <span
                    style={{
                      fontFamily: "PlusJakartaSans-Medium",
                      marginRight: 3,
                    }}
                  >
                    500
                  </span>
                  Recurring User Credits/Month
                </li>
                <li>Email Sequences</li>
                <li>Email Personalisation</li>
              </ul>
            </Row>
          </Row>
          {/* --------------Prospect Section End----------------- */}
          {/* ---------------------Connect Section Begin------------------ */}
          <Row style={{ fontSize: 27, padding: "1rem", paddingTop: 0 }}>
            <Row>
              <Col>
                <span
                  style={{
                    borderBottom: "1.6px solid #1C3B71",
                    fontFamily: "PlusJakartaSans-SemiBold",
                  }}
                >
                  <AddSharp
                    sx={{ fontFamily: "PlusJakartaSans-Bold", mr: 0.5 }}
                  />
                  Connect
                </span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Row>
                  <Col>
                    {" "}
                    <span style={{ fontFamily: "PlusJakartaSans-Medium" }}>
                      $
                    </span>
                    <span
                      style={{
                        fontFamily: "PlusJakartaSans-Bold",
                        fontSize: 40,
                      }}
                    >
                      200
                    </span>
                    <span
                      style={{
                        verticalAlign: "top",
                        marginTop: 7,
                        display: "inline-block",
                      }}
                    >
                      /User/Month
                    </span>
                  </Col>
                  <Col lg={{ span: 5, marginTop: 10 }}>
                    <span
                      style={{
                        border: "1px solid #1c3b71",
                        // fontSize: 20,
                      }}
                    >
                      <span
                        style={{
                          background: "#1c3b71",
                          textAlign: "center",
                          color: "#fff",
                          cursor: "pointer",
                          padding: "0rem 0.5rem",
                        }}
                        onClick={decrementConnect}
                      >
                        -
                      </span>
                      <span
                        style={{
                          textAlign: "center",
                          padding: "0rem 0.5rem",
                          display: "inline-block",
                          width: 70,
                        }}
                      >
                        {countConnect}
                      </span>
                      <span
                        style={{
                          background: "#1c3b71",
                          textAlign: "center",
                          color: "#fff",
                          padding: "0rem 0.5rem",
                          cursor: "pointer",
                        }}
                        onClick={incrementConnect}
                      >
                        +
                      </span>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ fontSize: 20 }}>
              <ul style={{ marginLeft: 40 }}>
                <li>
                  <span
                    style={{
                      fontFamily: "PlusJakartaSans-Medium",
                      marginRight: 3,
                    }}
                  >
                    500
                  </span>
                  Recurring User Credits/Month
                </li>
                <li>Email Sequences</li>
                <li>Email Personalisation</li>
                <li>Dialer</li>
                <li>Call Recordings</li>
                <li>AI Powered Emails</li>
                <li>AI Call Coaching</li>
                <li>Auto Dialer</li>
              </ul>
            </Row>
          </Row>
          {/* ---------------------Connect Section Ends--------------------------------------- */}
          <Divider
            sx={{ borderColor: "#616680", borderWidth: 1, opacity: 1 }}
          />
        </Row>
        {/* -----------License Row Finish--------------------------- */}

        {/* -----------------Add On Row Begin ----------------------------- */}
        <Row>
          {/* ------------Add On Heading BEgin--------- */}
          <Row style={{ padding: "1.5rem 1rem" }}>
            <h3 style={{ fontFamily: "PlusJakartaSans-Bold" }}>Add On</h3>
          </Row>
          {/* ------------Add On Heading End--------- */}
          {/* ---------------BuyerWatch Section STARTS---------------------- */}
          <Row style={{ fontSize: 27 }}>
            <Row>
              <Col>
                <span
                  style={{
                    borderBottom: "1.6px solid #1C3B71",
                    fontFamily: "PlusJakartaSans-SemiBold",
                  }}
                >
                  <AddSharp
                    sx={{ fontFamily: "PlusJakartaSans-Bold", mr: 0.5 }}
                  />
                  BuyerWatch
                </span>
              </Col>
              <Col>
                <div style={{ float: "right" }}>
                  <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 35 },
                      [`&, &.${checkboxClasses.checked}`]: {
                        color: "#1C3B71",
                      },
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ fontSize: 20 }}>
              {/* <Col> */}
              <ul style={{ marginLeft: 40 }}>
                <li>
                  <span
                    style={{
                      fontFamily: "PlusJakartaSans-Medium",
                      marginRight: 4,
                    }}
                  >
                    2000
                  </span>
                  Job Changee included (in Salesforce)
                </li>
              </ul>
              {/* </Col> */}
            </Row>
          </Row>
          <Row
            style={{
              fontFamily: "PlusJakartaSans-SemiBold",
              fontSize: 25,
              padding: "1rem 2.5rem",
            }}
          >
            <Col>Annually:</Col>
            <Col style={{ textAlign: "right", fontSize: 30 }}>
              $10,000<sup>.00</sup>
            </Col>
          </Row>
          {/* ---------------BuyerWatch Section END---------------------- */}
          <Divider
            sx={{ borderColor: "#616680", borderWidth: 1, opacity: 1, mb: 1 }}
          />
        </Row>
        {/* -----------------Add On Row Ends---------------------------- */}

        {/* ---------------------------Checkout Section Begins------------------- */}
        <Row>
          {/* ------------Checkout Heading Begin--------- */}
          <Row style={{ padding: "1.5rem 3rem" }}>
            <Col>
              <h3 style={{ fontFamily: "PlusJakartaSans-Bold" }}>Checkout</h3>
            </Col>
            <Col style={{ textAlign: "right", fontSize: 22 }}> Quantity</Col>
          </Row>
          {/* ------------Checkout Heading End--------- */}
          {/* ---------------Quantity Mention---------------------- */}
          <Row style={{ padding: "0rem 1.5rem 0rem 3rem " }}>
            <Row style={{ marginBottom: 10 }}>
              <Col>Total Annual Bulk Credits</Col>
              <Col style={{ textAlign: "right" }}>
                <span
                  style={{
                    border: "0.5px solid #1c3b71",
                    width: 130,
                    display: "inline-block",
                    padding: "1.5px 10px",
                    fontSize: 18,
                  }}
                >
                  {quantity}
                </span>
              </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Col>Total Annual Recurring Credits</Col>
              <Col style={{ textAlign: "right" }}>
                <span
                  style={{
                    border: "0.5px solid #1c3b71",
                    width: 130,
                    display: "inline-block",
                    padding: "1.5px 10px",
                    fontSize: 18,
                  }}
                >
                  {sumRecurring()}
                </span>
              </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Col>
                License <b>(Discover)</b>{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span
                  style={{
                    border: "0.5px solid #1c3b71",
                    width: 100,
                    display: "inline-block",
                    padding: "1.5px 10px",
                    fontSize: 18,
                  }}
                >
                  {countDiscover}
                </span>
              </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Col>
                License <b>(Prospect)</b>{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span
                  style={{
                    border: "0.5px solid #1c3b71",
                    width: 100,
                    display: "inline-block",
                    padding: "1.5px 10px",
                    fontSize: 18,
                  }}
                >
                  {countProspect}
                </span>
              </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Col>
                License <b>(Connect)</b>{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span
                  style={{
                    border: "0.5px solid #1c3b71",
                    width: 100,
                    display: "inline-block",
                    padding: "1.5px 10px",
                    fontSize: 18,
                  }}
                >
                  {countConnect}
                </span>
              </Col>
            </Row>
          </Row>
          {/* ---------------Quantity Mention END---------------------- */}
        </Row>

        {/* --------------------------Checkout Section Ends---------------------- */}

        {/* ---------------First Row Start------------------- */}
        <Row
          style={{
            backgroundColor: "#1C3B71",
            color: "#fff",
            padding: "1rem",
            fontSize: 23,
            borderBottom: "15px solid #616680",
          }}
        >
          <Col style={{ fontFamily: "PlusJakartaSans-SemiBold" }}>
            Total Pricing:
          </Col>
          <Col
            style={{
              fontFamily: "PlusJakartaSans-Bold",
              textAlign: "right",
            }}
          >
            {calculateSum()}
            {/* <sup>.00</sup> */}
          </Col>
        </Row>
        {/* ---------------First Row End------------------- */}
      </Container>
    </>
  );
};

export default App;
