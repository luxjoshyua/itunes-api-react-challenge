import React, { Component } from "react";

/* Create the class that inherits from the Component class
    This class has a constructor that contains `props` as a parameter and the state of that component
    This state has three properties:
     error - check if there's an error in the connection
     isLoaded - check if the fetching process is finished
     albums - contains the JSON content
*/

class GetAlbums extends Component {
    constructor(props) {
        // you must call super if using a constructor
        // we pass props to it so we can use this.props
        super(props);
        console.log(this.props, "is empty");
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
                    this.setState({
                        isLoaded: true,
                        albums: result
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
            // if page hasn't loaded, show a loading div
        } else if (!isLoaded) {
            return <div>Loading....</div>;
            // otherwise render out the album components
        } else {
            return (
                <div>
                    <ol>
                        {albums.map(album => (
                            <li key={album.id}>
                                <div></div>
                            </li>
                        ))}
                    </ol>
                </div>
            );
        }
    }
}

export default GetAlbums;
