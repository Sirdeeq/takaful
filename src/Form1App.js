// import logo from './logo.svg';
import { Col, Row,  Form, FormGroup, Label, Input } from 'reactstrap';

import './App.css';

function Form1App({bio , handleBio}) {
  return (
    <>
    <div>
      <br />
      <p className="text-start">Select customer type</p>
      <Row className="m-0 p-0">
        <Col md={5}>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio1" value={bio.radio1} onChange={handleBio}  />{'Customer registration for individual Applicant '}
            </Label>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio2" value={bio.radio2} onChange={handleBio} />{'Customer registration for corporates & trustees '}
            </Label>
          </FormGroup></Col>
      </Row>
      <fieldset style={{ border: "1px rgb(0,0,72) solid " }}>
      

        <Form >
          <Row className="m-0 p-0">
            <Col md={4} >
              <FormGroup>
                <Label for="First"  >First Name*</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="Firstname"
                  onChange={handleBio}
                  value={bio.firstName}
                />
              </FormGroup>
            </Col>
            <Col md={4} >
              <FormGroup>
                <Label for="Middlename">Middle Name*</Label>
                <Input
                  type="text"
                  name="middleName"
                  id="Middlename"
                  onChange={handleBio}
                  value={bio.middleName}
                />
              </FormGroup>
            </Col >
            <Col md={4} >
              <FormGroup>
                <Label for="Lastname">Last Name*</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="Lastname"
                  onChange={handleBio}
                  value={bio.lastName}
                />
              </FormGroup>
            </Col>

            <Col md={4} >
              <FormGroup>
                <Label for="maidenName" >Mother Maiden Name</Label>
                <Input
                  type="text"
                  name="maidenName"
                  id="maidenName"
                  onChange={handleBio}
                  value={bio.maidenName}
                />
              </FormGroup>
            </Col>
            <Col md={4} >
              <FormGroup>
                <Label for="date">Date Of Birth </Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  onChange={handleBio}
                  value={bio.dateOfBirth}
                />
              </FormGroup>
            </Col >
            <Col md={4} >
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input
                  type="select"
                  name="gender"
                  id=""
                  onChange={handleBio}
                  value={bio.gender}
                >
                  <option value="select">--select gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md={4} >
              <FormGroup>
                <Label for="perAddress">Permernent Adderss</Label>
                <Input type="textarea"
                  name="perAddress"
                  id="perAddress"
                  onChange={handleBio}
                  value={bio.perAddress}
                />
              </FormGroup>
            </Col >
            <Col md={4} >
              <FormGroup>
                <Label for="curAddress">Currrent Adderss</Label>
                <Input
                  type="textarea"
                  name="curAddress"
                  id="curAddress"
                  onChange={handleBio}
                  value={bio.curAddress}
                />
              </FormGroup>
            </Col>
            <Col md={4} >
              <FormGroup>
                <Label for="city" >City</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleBio}
                  value={bio.city}
                />
              </FormGroup>
            </Col>

            <Col md={4} >
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="select"
                  name="state1"
                  id="state1"
                  onChange={handleBio}
                  value={bio.state1}
                >
                  <option value="select">--select state--</option>
                  <option value="kano">Kano</option>
                  <option value="kaduna">Kaduna</option>
                </Input>
              </FormGroup>
            </Col >
            <Col md={4} >
              <FormGroup>
                <Label for="zip">Zip Code</Label>
                <Input
                  type="number"
                  name="zip"
                  id="zip"
                  onChange={handleBio}
                  value={bio.zip}
                />
              </FormGroup>
            </Col>
            <Col md={4} >
              <FormGroup>
                <Label for="country">Country</Label>
                <Input
                  type="select"
                  name="country"
                  id=""
                  onChange={handleBio}
                  value={bio.country}
                >
                  <option value="select">--select country--</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="niger">Niger</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md={4} >
              <FormGroup>
                <Label for="">Email*</Label>
                <Input
                  type="email"
                  name="email"
                  id=""
                  onChange={handleBio}
                  value={bio.email}
                >
                </Input>
              </FormGroup>
            </Col >
            <Col md={4} >
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  type="number"
                  name="phoneNumber"
                  id="exampleText"
                  onChange={handleBio}
                  value={bio.phoneNumber}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
       <br />
      </fieldset>
    </div>
    </>
  );
}

export default Form1App;
