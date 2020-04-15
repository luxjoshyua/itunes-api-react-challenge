import React from "react";
import { Component } from "react";

class TrackVisibility extends Component {
    ref = React.createRef();

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio === 1) {
                    // Item is fully in view
                    // this.props.onVisible();
                    // this.entry.classList.add("test-class");
                    console.log("here is what my entry looks like", entry);
                } else {
                    // entry.style.opacity = "0";
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 1.0,
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
