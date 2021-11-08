import { faCheck, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import Form1App from "./Form1App";
import Form2App from "./Form2App";
import Form3App from "./Form3App";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useHistory } from 'react-router';



function General() {
    const [step, setStep] = useState(0)
    const next = () => { setStep((p) => p + 1) }
    const back = () => { setStep((p) => p - 1) }
    const history = useHistory()
  const firstData = {
    radio1: "",
    radio2: "",
    firstName: "",
    middleName: "",
    lastName: "",
    maidenName: "",
    dateOfBirth: "",
    gender: "",
    perAddress: "",
    curAddress: "",
    city: "",
    state1: "",
    zip: "",
    country: "",
    email: "",
    phoneNumber: 0
  }
  const secondData = {
    radio3: "",
    radio4: "",
    occupation: "",
    empName: "",
    empNationality: "",
    empContact: ""
}
const thirdData = {
    radio5: "",
    radio6: "",
    nin: "",
    bankName: "",
    accNo: "",
    bvn: ""
}
  const [bio, setBio] = useState(firstData)
  const [employ, setEmploy] = useState(secondData)
  const [bank, setBank] = useState(thirdData)

  const handleBio = ({ target: { name, value } }) => {
    setBio(prev => ({ ...prev, [name]: value }))
  }
  const handleBank = ({ target: { name, value } }) => {
    setBank(prev => ({ ...prev, [name]: value }))
  }
  const handleEmploy = ({ target: { name, value } }) => {
    setEmploy(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = () => {
    console.log(bio,employ,bank);
    alert("submitted sucessfully")
    setStep(0)
  }

   
    let color = { background: "rgb(0,0,72)" }
    let smlbtn = { width: "10rem", backgroundColor: "rgb(0,0,72)" }
    let bigbtn = { width: "20rem", backgroundColor: "rgb(0,0,72)" }
    // const history = useHistory()
    return (
        <div>
            <Header />
            <Row >
                <Col md={3}>
                    <Sidebar title="Customer Registration" />
                    <Sidebar title="UnderWritting" />
                    <Sidebar title="Finance" />
                    <Sidebar title="Claim" />
                    <Sidebar title="Report" />
                </Col>
                <Col md={8}>
                {step === 0 ?  (<Button size="lg" className="btn float-start" style={color} onClick={()=>{
                 history.push("/app/table")
             }}>
                <FontAwesomeIcon icon={faChevronLeft}
                    style={color}
                /> Click To Go Back</Button>) : null}
                {step === 1 ?  (<Button size="lg" className="btn float-start" style={color} onClick={back}>
                <FontAwesomeIcon icon={faChevronLeft}
                    style={color}
                /> Click To Go Back</Button>) : null}
                {step === 2          ?  (<Button size="lg" className="btn float-start" style={color} onClick={back}>
                <FontAwesomeIcon icon={faChevronLeft}
                    style={color}
                /> Click To Go Back</Button>) : null}
                <br />
                <br />
                    <div className="d-flex justify-context-between m-0 p-0">
                        <Button style={bigbtn} size="lg" className="m-2" onClick={() => setStep(0)} >Biodata</Button>
                        <Button style={bigbtn} size="lg" className="m-2" onClick={() => setStep(1)} >Employer Details</Button>
                        <Button style={bigbtn} size="lg" className="m-2" onClick={() => setStep(2)} >Bank Details</Button>
                    </div>
                    {step === 0 ? (<Form1App  bio={bio} handleBio={handleBio}  />) :
                        step === 1 ? (<Form2App employ={employ} handleEmploy={handleEmploy} />) :
                            step === 2 ? (<Form3App bank={bank} handleBank={handleBank} />) :
                                null}
                    {step === 0 ? null   : (<Button onClick={back} style={smlbtn} size="sm" className="m-2 btn float-start" >
                         <FontAwesomeIcon icon={faChevronLeft} style={color} />Back
                    </Button>)}

                        {step === 2 ? null :
                        (<Button onClick={next} style={smlbtn} size="sm" className="m-2 btn float-end" >
                            Next  <FontAwesomeIcon icon={faChevronRight} style={color} />
                        </Button>) }
                        {step === 2 ? (<Button onClick={handleSubmit} style={smlbtn} size="sm" className="m-2 btn float-end" >
                            Submit  <FontAwesomeIcon icon={faCheck} style={color} />
                        </Button>) : null}

                </Col>
            </Row>

        </div>
    )
}

export default General;