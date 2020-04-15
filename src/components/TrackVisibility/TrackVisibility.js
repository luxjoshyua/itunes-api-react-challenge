import React from "react";
import { Component } from "react";

class TrackVisibility extends Component {
    ref = React.createRef();

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Item is fully in view
                if (entry.intersectionRatio === 1) {
                    // console.log(
                    //     "here is what my entry looks like",
                    //     entry.target
                    // );
                    // if entry is fully in view, set the opacity
                    entry.target.firstElementChild.style.opacity = "1";
                } else if (entry.intersectionRatio < 0.8) {
                    // if the entry isn't in view, remove the class
                    // otherwise set the opacity to 0
                    entry.target.firstElementChild.style.opacity = "0";
                }
            },
            {
                root: null,
                rootMargin: "0px",
                // threshold: 1.0,
                threshold: 1,
            }
        );
        if (this.ref.current) {
            observer.observe(this.ref.current);
        }
    }

    render() {
        return <div ref={this.ref}>{this.props.children}</div>;
    }
}

export default TrackVisibility;
