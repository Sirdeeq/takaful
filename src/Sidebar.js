import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const Sidebar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div >
   
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="text-start px-5" style={{  background:"rgb(0,0,72)", width:'20rem'}}  >
       {props.title}           <FontAwesomeIcon icon={faCaretDown} style={{  background:"rgb(0,0,72)"}}/>                 
      </DropdownToggle>
      <DropdownMenu style={{  background:"white", width:'20rem'}} >
        <DropdownItem >------</DropdownItem>
        <DropdownItem >------</DropdownItem>
        <DropdownItem> ------</DropdownItem>
        <DropdownItem> ------</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
   
    </div>
  );
}
export default Sidebar