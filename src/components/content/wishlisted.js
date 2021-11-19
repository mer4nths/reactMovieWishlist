import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
`;

const Title = styled.p`
`;

const DeleteButton = styled.button`
`;

function Wishlisted(props){
    return(
        <Main>
            <Title>{props.title}</Title>
            <DeleteButton onClick={()=>{props.removeFromWishlist(props.title)}}>Delete</DeleteButton>
        </Main>
    )
}

export default Wishlisted;


