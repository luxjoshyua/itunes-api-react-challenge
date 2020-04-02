// Always import external libraries first, then your own
import React, { Component } from "react";
// import styled from "styled-components";

// CSS
import "./App.css";

// Components
import GetAlbums from "./components/AlbumFetch/GetAlbums";

/**
 * Base Requirements
 *  Show top 100 albums based on JSON feed here - https://itunes.apple.com/us/rss/topalbums/limit=100/json
 *  Show twenty albums, then load another twenty, for performance
 */

//  Fetch the data

class App extends Component {
    render() {
        return (
            <div className="App">
                <GetAlbums></GetAlbums>
            </div>
        );
    }
}
export default App;
