import React, { useState, useEffect } from "react";
import styled from "styled-components";

import movieData, { IMAGE_URL } from "./moviedata";
import MovieObject from "./movie";
import Wishlisted from "./wishlisted";

const Main = styled.div`
    color: white;
    padding: 15px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
`;

const WishlistButton = styled.button`
    background-color: white;
    padding: 10px;
    bottom: 0%;
    position: fixed;
`;

const ListButton = styled.button`
    background-color: white;
    padding: 10px;
    bottom: 0%;
    position: fixed;
`;

function Content (){
    const[isMovieList, setIsMovieList] = useState(true);
    const[wishlist, setWishlist] = useState([]);

    function alternateList(){
        setIsMovieList((prevIsMovieList)=> !prevIsMovieList)
    };

    useEffect(()=>{
        const wishlistCandidate = localStorage.getItem("wishlist");

        if(wishlistCandidate !== null && wishlistCandidate !== undefined){
            setWishlist(JSON.parse(wishlistCandidate)); 
        } 
    }, []);

    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    function addToWishlist (addedMovieTitle) {
        setWishlist((prevWishlist)=>{
            let isInWishlist = false;
            for (const wishlistedMovie of prevWishlist){
                if (addedMovieTitle === wishlistedMovie){
                    isInWishlist = true;
                    break
                }
            }

            if (isInWishlist){
                return prevWishlist;
            } else {
                return prevWishlist.concat(addedMovieTitle);
            }

        })
    };

    function removeFromWishlist(removedMovieTitle){
        setWishlist((prevWishlist)=>{
            return prevWishlist.filter((value,index,arr)=> {
                return value !== removedMovieTitle;
            });
        })
    }

    function movieMaker(){
        let movieList = [];
        for (const movie of movieData){
            movieList.push(<MovieObject title={movie.title} poster={`${IMAGE_URL}${movie.poster_path}`} summary={movie.overview} addToWishlist={addToWishlist} />)
        }
        return movieList;
    };

    function wishlistObjectMaker() {
        let wishlistObjectList = [];
        for (const movieTitle of wishlist){
            wishlistObjectList.push(<Wishlisted title={movieTitle} removeFromWishlist ={removeFromWishlist}/>)
        }
        return wishlistObjectList;
    };
    
    if (isMovieList){
        return(
            <Main>
                <WishlistButton onClick={alternateList}>Wishlist</WishlistButton>
                <ListContainer>
                    {movieMaker()}
                </ListContainer>
            </Main>
        );
    } else {
        return(
            <Main>
                <ListButton onClick = {alternateList}>Back</ListButton>
                {wishlistObjectMaker()}
            </Main>
        );
    }

};

export default Content;