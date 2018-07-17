import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';




class Help extends Component {

    state = {
        space: []
    }

    async componentDidMount(){
        await this.getSpaces();
    }

    getSpaces = async () => {
        const response = await axios({
            method: 'get',
            url: 'https://devnext.atlassian.net/wiki/rest/api/search?cql=space',
            // cors: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + process.env.REACT_APP_API_KEY,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Access-Control-Allow-Credentials': true,
             }
            
        })
            console.log(response)
    }


    render() {
        return (
            <Container>
                <input 
                    className="search" 
                    type="text" 
                    //value={this.state.search}
                    //onChange={this.updateSearch} 
                    placeholder='Search'
                />
            </Container>
        );
    }
}

export default Help;

const Container = styled.div`
    width: 92vw;
    display: flex;
    justify-content: flex-end;
`