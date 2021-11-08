import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

import { Button, Col, Row, Table } from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';


export default function Table1() {
    const history = useHistory()
    let color = { background: "rgb(0,0,72)" }
    return (
        <>
            <Header />
            <Row >
            <Col md={3}>
                <Sidebar title="Customer Registration" />
                <Sidebar title="UnderWritting" />
                <Sidebar title="Finance" />
                <Sidebar title="Claim" />
                <Sidebar title="Report" />
            </Col>
            <Col md={8} >
                
             <Button size="lg" className="btn float-start" style={color} onClick={()=>{
                 history.push("/app/form")
             } }>
                <FontAwesomeIcon icon={faPlus}
                    style={color}
                /> Click To Add New</Button>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>State</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td> <Button color="secondary">Edit</Button>  <Button color="secondary">Delete</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td> <Button color="secondary">Edit</Button>  <Button color="secondary">Delete</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td> <Button color="secondary">Edit</Button>  <Button color="secondary" >Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        </>
    );
}
