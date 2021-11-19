import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "./moviedata";


const Main = styled.div`
    color: white;
    width: 300px;
    text-align: center;
`;

const Poster = styled.img`
`;

const Title = styled.h2`
`;

const Summary = styled.p`
    display: ${(props) => {
        if(props.display){
            return "inline-block";
        } else {
            return "none";
        }
    }};
`;

const AddToWishlist = styled.button`
    padding: 5px;
`;

function MovieObject (props){
    const[showSummary, setShowSummary] = useState(false);

    function alternateShowSummary () {
        setShowSummary((prevShowSummary)=> !prevShowSummary);
    }

    return(
        <Main>
            <Poster onClick = {alternateShowSummary} src={`${props.poster}`}/>
            <Title>{props.title}</Title>
            <Summary display={showSummary}>{props.summary}</Summary>
            <AddToWishlist onClick={() => {props.addToWishlist(props.title)}}>Add to Wishlist</AddToWishlist>
        </Main>
    )
}

export default MovieObject;