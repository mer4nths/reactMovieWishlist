import React from "react";
import styled from "styled-components";

import logo from "./logo.svg"

const Main = styled.div`
    align-items: center;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;

const Title = styled.h1`
`;

const Logo = styled.img`
    max-width: 50px;
    display:flex;
    flex-direction: row;
`;

function Header (){
    return (
        <Main>
            <Title>My React Movie Wishlist</Title>
            <Logo src={logo}/>
        </Main>

    );
};

export default Header;
