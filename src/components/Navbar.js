import React, { useContext } from 'react';
import styled from '@emotion/styled';


const Brand = styled.div`
    float: left !important;
`

const Nav = styled.nav`
   background: #3c3c5f;
   display: flex;
   color: #fff;
   justify-content: space-around;
`
const Li = styled.li`
    list-style: none;
    display: inline-block;
    padding-left: 1rem;
    margin-top: 0.5rem;
`



const Navbar = () => {
    
    
return ( 
        <div>
           <Nav>
                <Brand>
                    <h2>JAROVENTS</h2>
                </Brand>
                <ul>
                    <Li>Home</Li>
                    <Li>About</Li>
                </ul>
                </Nav>
        </div>
     );
}
 
export default Navbar;
