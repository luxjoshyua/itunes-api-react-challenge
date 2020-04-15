import React from "react";
import styled from "styled-components";
import TrackVisibility from "../TrackVisibility/TrackVisibility";

const AlbumWrapper = styled.div`
    border: 1px solid black;
    max-width: 280px;
    background-color: #33d233;
    margin: 16px 9px;
    border-radius: 5px;
    &:hover {
        transition: all 0.25s ease-in-out;
        transform: scale(1.1);
    }
`;

const AlbumInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    padding: 0 16px;
`;

const AlbumTitle = styled.p`
    font-size: 20px;
    text-align: center;
    margin-bottom: 0;
    padding: 0 12px 16px;
`;

const AlbumImg = styled.img`
    border-radius: 46px;
`;

const AlbumPrice = styled.p`
    font-size: 14px;
`;

const AlbumBuyButton = styled.button`
    font-size: 14px;
    padding: 6px 54px;
    margin-bottom: 14px;
    border: 1px solid black;
    background-color: #ffffffd9;
    cursor: pointer;
    border-radius: 46px;

    &:hover {
        opacity: 0.6;
    }
`;

const AlbumBuyLink = styled.a`
    text-decoration: none;
    font-style: italic;
    text-transform: uppercase;
    font-weight: 700;
    color: initial;
`;

// props is being passed from GetAlbums
const AlbumSingle = (props) => {
    // this comes from GetAlbum
    // console.log(props);
    // console.log(props.children);

    return (
        <TrackVisibility>
            <AlbumWrapper className="AlbumTile">
                <AlbumInner>
                    {/* set the album title */}
                    <AlbumTitle>{props.title}</AlbumTitle>
                    {/* set the album image */}
                    <AlbumImg src={props.image} />
                    {/* set the album price */}
                    <AlbumPrice>{props.price}</AlbumPrice>
                    {/* buy the album button */}
                    <AlbumBuyButton>
                        <AlbumBuyLink href={props.buy} target="_blank">
                            buy now
                        </AlbumBuyLink>
                    </AlbumBuyButton>
                </AlbumInner>
            </AlbumWrapper>
        </TrackVisibility>
    );
};

export default AlbumSingle;
