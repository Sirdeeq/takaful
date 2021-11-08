import React from "react";
import  {  Row, Col } from 'reactstrap';

function Header() {
  let color = {background:"rgb(0,0,72)"}
    return (
        <header>
      <Row style={color} className="m-0 p-0">
        <Col md="1" style={color}>
        <img 
        className="rounded float-star"
        style={color}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABC1BMV
        EX+/v7///82NWT7+/wAmNo5OGYAktgpKFr6+vsvLl8Al9oAlNkAkdgEmtssK1wzMmFCQW3x8POcm7PKydaKiaV
        paYtWVXx3yOvf3+dRueZgv+jS0tx/fpzY7/k+sePO6/diYYZYV37s7PCjo7jb2+NKSXO34vRycZKr3fInqOC+v
        s3n9fuO0e7j8/p3dpaWlq45L1yrqr62tsfD5vYToN0eHVKi2fGCzO0AitVYu+duxOotIVIXkcwubqIvT4EuQ3Q
        pWo4CgcIiOm8XdrAoZJlOqNQMXZpjeJ6XyeMBebpQZpA6R3ZMQWsbUYidsMh+iaeAs9NgUHWSo71CksKHqcZ+b
        40+bZwjMWW3rLzWNrIqAAAO80lEQVR4nO1b6XrbNhbVFUWJ4ibJ1GpqoajNlBxtlh3baeu4SZe0SdN2pjPz/k8
        y9wIgCUpu+7Wlm/7Aia1IAAjgAHcF5EJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU
        FBQUFBQUFBQUFB4Z8AjeFTz+KvAhkAR+FXyCBJ3uCfzJZYaIOr+cV8tGJTPW1BLLRGGDYMRvYTTPL3B0Ua2vw8c
        syybZUOw5cDnPJRC6TR3a3HdUR7ceb/FpX85RNiaE8XJyMDXEYWcig5jmOaluXcjbITxRZea/vqlbvd1mpVt1IL
        9nKvcII8qUBj0WIIljIT0PoBL56KYg1GkW05DvL47PMvHh6+eP35o9MpSA9p0P2l+uXrz9+8efP2YVvU9aJbSR7
        H2j3vUWDR3HVPtvQvEdErLqGid+XVM2aVKiv2eKkGNyVOo/S2Tiu+3W71799+tUofguUXX3/mcJTe6NsicnGLO4
        iJbK5ZjwKVSkVfTPNjAo06jkeotg1Ii41xjZcKInBZNpFGyXn88lWlinVFBBL6xojnAt++M4kpwTRLjw9bbKMXK
        5t4Jc5cPYtipbjPjQkSqRUZ9MpaWl2jXWVz5URwP6ySw2b4XbBojeuoADp/KGiwpzR4WUbVIaqmXS4dDtHhe9aD
        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"
        alt="noor takaful nigeria"
        style={{ width:50 }}
        />
        </Col>
        <Col md={5}  style={color}>
            <h1 className="text-white "  style={color}>General Takaful</h1>
        </Col>
      </Row>
      </header>
    )
}

export default Header;