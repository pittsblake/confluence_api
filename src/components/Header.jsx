import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <h1>Community Connect</h1>
        </Nav>
    );
};



const Nav = styled.div`
    height: 12vh;
    width: 100%;
    background-color: #5b798b;
    display: flex;
    align-items: center;

    h1{
       color: white; 
       margin-top: 0px;
    }
`

export default Header;