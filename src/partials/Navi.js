import {Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav} from 'reactstrap';




function Navi(){


    return (
        <Navbar color="light" light expand='md'>
            <NavbarBrand to='#' style={{marginLeft:"40px"}}>Banking App</NavbarBrand>
                <Collapse navbar>
                     <Nav className='mr-auto' navbar>
                      
                        <NavItem>
                            <NavLink  to='#'>CreateAccount</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to='#'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to='#'>Deposit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='#'>Withdraw</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='#'>AllData</NavLink>
                        </NavItem>
                    </Nav>
             </Collapse>
        </Navbar>
    )
}
export default Navi;