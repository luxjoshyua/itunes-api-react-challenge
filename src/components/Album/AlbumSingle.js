import React from "react";
import styled from "styled-components";

const AlbumWrapper = styled.div`
    border: 1px solid lightblue;
    min-height: 300px;
    background-color: green;
`;

const AlbumInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const AlbumTitle = styled.p`
    font-size: 22px;
    text-align: center;
    font-style: italic;
    padding-bottom: 14px;
`;

const AlbumImg = styled.img`
    border-radius: 50%;
    min-height: 140px;
    width: auto;
`;

// in AlbumSingle, I need to pass in data from the json feed e.g. album name, img, artist name, but how?

const AlbumSingle = props => {
    // console.log(props); // props is empty!!
    return (
        <AlbumWrapper>
            <AlbumInner>
                <AlbumTitle></AlbumTitle>
                <AlbumImg></AlbumImg>
            </AlbumInner>
        </AlbumWrapper>
    );
};

export default AlbumSingle;
