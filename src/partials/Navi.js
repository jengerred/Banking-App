import {Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';




function Navi(){
    const navigate = useNavigate();

  

    return (
        <Navbar color="light" light expand='md'>
            <NavbarBrand tag={Link} to='/' style={{marginLeft:"40px"}}>Banking App</NavbarBrand>
                <Collapse navbar>
                     <Nav className='mr-auto' navbar>
                      
                        <NavItem>
                            <NavLink  tag={Link} to='/createaccount'>Create-Account</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  tag={Link} to='/login'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/deposit' >Deposit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/withdraw' >Withdraw</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/alldata'>AllData</NavLink>
                        </NavItem>
                    </Nav>
             </Collapse>
        </Navbar>
    )
}
export default Navi;