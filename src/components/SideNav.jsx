import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class SideNav extends Component {
    render() {
        return (
            <SideBarContainer>

                <div>
                    <Link to="#" style={{ textDecoration: 'none', color: 'white' }}> Dashboard </Link>


                    <Link to="#" style={{ textDecoration: 'none', color: 'white' }}> To-dos </Link>


                    <Link to="#" style={{ textDecoration: 'none', color: 'white' }}> Calendar </Link>


                    <Link onClick={this.props.onReleaseNotes} to="/release-notes" style={{ textDecoration: 'none', color: 'white' }}> Release Notes </Link>


                    <Link onClick={this.props.onHelp} to="/help" style={{ textDecoration: 'none', color: 'white' }}> Help </Link>
                </div>

            </SideBarContainer>
        );
    }
}

export default SideNav;


const SideBarContainer = styled.div`
    background-color: #3f4d55;
    height: 88vh;
    width: 8vw;

    div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 40%;

    }

   
`