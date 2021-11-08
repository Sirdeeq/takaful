
import { Col, Row,  Form, FormGroup, Label, Input } from 'reactstrap';



function Form3App({bank, handleBank}){
    return (
        <>
      <div>
            <br />
            <br />
            <p className="text-start">Select customer type</p>
            <Row className="m-0 p-0">
                <Col md={5}>
                    <FormGroup check >
                        <Label check>
                            <Input type="radio" name="radio5" value={bank.radio5} onChange={handleBank} />{'Customer registration for individual Applicant '}
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup check >
                        <Label check>
                            <Input type="radio" name="radio6" value={bank.radio6} onChange={handleBank}  />{'Customer registration for corporates & trustees '}
                        </Label>
                    </FormGroup></Col>
            </Row>
            <fieldset style={{ border: "1px rgb(0,0,72) solid " }}>



                <Form >
                    <Row className="m-0 p-0">
                        <Col md={6} >
                            <FormGroup>
                                <Label for="nin">NIN</Label>
                                <Input
                                    type="number"
                                    name="nin"
                                    id="nin"
                                    onChange={handleBank}
                                    value={bank.nin}
                                />
                            </FormGroup>
                        </Col >
                        <Col md={6} >
                            <FormGroup>
                                <Label for="bankName">Bank Name</Label>
                                <Input
                                    type="select"
                                    name="bankName"
                                    id=""
                                    onChange={handleBank}
                                    value={bank.bankName}
                                >
                                    <option value="select">--Select Bank--</option>
                                    <option value="polaris bank">Polaris bank</option>
                                    <option value="jaiz bank">Jaiz bank</option>
                                    <option value="Fidelity bank">Fidelity bank</option>
                                    <option value="FCMB bank">FCMB bank</option>
                                    <option value="Taj bank">Taj bank</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6} >
                            <FormGroup>
                                <Label for="accNo">Account Number</Label>
                                <Input
                                    type="number"
                                    name="accNo"
                                    id="empContact"
                                    onChange={handleBank}
                                    value={bank.accNo}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} >
                            <FormGroup>
                                <Label for="bvn" >BVN</Label>
                                <Input
                                    type="number"
                                    name="bvn"
                                    id="bvn"
                                    onChange={handleBank}
                                    value={bank.bvn}
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

export default Form3App