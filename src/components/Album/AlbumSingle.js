import React from "react";
import styled from "styled-components";

const AlbumContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const AlbumWrapper = styled.div`
    border: 1px solid lightblue;
    min-height: 300px;
    min-width: 300px;
    max-width: 340px;
    background-color: green;
    margin-bottom: 10px;
    margin: 32px auto;
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
    console.log(props.children.key); // props is empty!!
    return (
        <AlbumWrapper>
            <AlbumInner>
                <AlbumTitle key={props.children.key}>
                    {props.children.key}
                </AlbumTitle>
                <AlbumImg></AlbumImg>
            </AlbumInner>
        </AlbumWrapper>
    );
};

export default AlbumSingle;
