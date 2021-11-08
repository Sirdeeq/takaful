import { Col, Row,  Form, FormGroup, Label, Input } from 'reactstrap';


function Form2App({employ ,handleEmploy}){
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
                           <Input type="radio" name="radio3" value={employ.radio3} onChange={handleEmploy}  />{'Customer registration for individual Applicant '}
                       </Label>
                   </FormGroup>
               </Col>
               <Col md={5}>
                   <FormGroup check >
                       <Label check>
                           <Input type="radio" name="radio4" value={employ.radio4} onChange={handleEmploy}  />{'Customer registration for corporates & trustees '}
                       </Label>
                   </FormGroup></Col>
           </Row>
           <fieldset style={{ border: "1px rgb(0,0,72) solid " }}>
          
               <Form>
               <Row className="m-0 p-0">
               <Col md={6} >
               <FormGroup>
               <Label for="occupation" >Occupation</Label>
               <Input
               type ="text"
               name="occupation"
               id="occupation"
               onChange={handleEmploy}
               value={employ.occupation}
               />
               </FormGroup>
               </Col>
               <Col md={6} >
               <FormGroup>
               <Label for="empName">Empolyer Name</Label>
               <Input
               type ="text"
               name="empName"
               id="empName"
               onChange={handleEmploy}
               value={employ.empName}
               />
               </FormGroup>
               </Col >
               <Col md={6} >
               <FormGroup>
               <Label for="empNationality">Employer Nationality</Label>
               <Input
               type ="text"
               name="empNationality"
               id="empNationality"
               onChange={handleEmploy}
               value={employ.empNationality}
               />
               </FormGroup>
               </Col>
               <Col md={6} >
               <FormGroup>
               <Label for="empContact">Employer Contact</Label>
               <Input
               type ="text"
               name="empContact"
               id="empContact"
               onChange={handleEmploy}
               value={employ.empContact}
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

export default Form2App