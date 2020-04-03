import React from "react";
import styled from "styled-components";

import GetAlbums from "../AlbumFetch/GetAlbums";

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
    // console.log(this.props, "What is it worth here"); // props is empty
    return <GetAlbums></GetAlbums>;
};

export default AlbumParentContainer;
