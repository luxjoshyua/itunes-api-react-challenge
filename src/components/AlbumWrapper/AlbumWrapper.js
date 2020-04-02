import React from "react";
import styled from "styled-components";
import AlbumSingle from "../Album/AlbumSingle";

const AlbumContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-flow: row wrap;
`;

const AlbumParentContainer = props => {
    return (
        <AlbumContainer>
            <AlbumSingle></AlbumSingle>
        </AlbumContainer>
    );
};

export default AlbumParentContainer;
