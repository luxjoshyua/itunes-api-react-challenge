import React, { Component } from "react";

import AlbumParentContainer from "../AlbumWrapper/AlbumWrapper";

/* Create the class that inherits from the Component class
    This class has a constructor that contains `props` as a parameter and the state of that component
    This state has three properties:
     error - check if there's an error in the connection
     isLoaded - check if the fetching process is finished
     albums - contains the JSON content
*/

/**
 * GetAlbums class is where I fetch the data, and also import my AlbumSingle component,
 * which should be one album populated with data e.g. image, name, band
 */

class GetAlbums extends Component {
    constructor(props) {
        // you must call super if using a constructor
        // we pass props to it so we can use this.props
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            albums: []
        };
    }

    // componentDidMount is the fetching procedure
    // it's a function in the React component class itself
    // it's called immediately after the component is mounted
    componentDidMount() {
        // fetch the json feed
        fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
            .then(response => response.json()) // get the result, turn to json (is already in json format but?!)
            .then(
                // handle the result
                result => {
                    // console.log("I am the result", result);

                    // console.log(result.feed.entry[0]["im:name"]); // accesses the first entrys album name

                    this.setState({
                        isLoaded: true,
                        albums: result // trying to add the result to the albums variable
                    });
                },

                // handle errors
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    // handle the output in a render() function
    render() {
        // assign state values to variables so I can say albums instead of this.state.albums
        const { error, isLoaded, albums } = this.state;

        // if there's an error fetching, show an error div
        if (error) {
            return <div>Error in loading, please wait</div>;
        }
        // if page hasn't loaded, show a loading div

        //you dont need an else if here because if the above ^ if is true, then it returns, so if the computer reaches here
        //then the above if must be false, it won't be else if do this, it's just if

        if (!isLoaded) {
            return <div>Loading....</div>;
        }

        console.log("What is props worth here", this.props); // empty

        // otherwise render out the AlbumSingle component
        const entries = albums.feed.entry;

        // this is returning just the name of each album - 100 in total
        return (
            <div>
                {entries.map(entry => (
                    <h1 key={entry.title.label}>{entry.title.label}</h1>
                ))}

                {/* this is my parent album wrapper component, where I will pass my child album component to */}
                {/* <AlbumParentContainer></AlbumParentContainer> */}
            </div>
        );
    }
}

export default GetAlbums;
