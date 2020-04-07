import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const albumTile = document.querySelectorAll(".AlbumTile");
console.log(albumTile);
// ReactDOM.findDOMNode(AlbumSingle);

const fixedBackgrounds = document.querySelectorAll(".chapter-fixed-bg");

// intersection observer
// const options = {
//     threshold: 0.1,
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.intersectionRatio >= 0.1) {
//             // console.log("Im in the viewport", entry.target);
//             entry.target.classList.toggle("in-view");
//         } else {
//             entry.target.classList.remove("in-view");
//             // console.log("Im not in the viewport");
//         }
//     });
// }, options);
// fixedBackgrounds.forEach((chapter) => {
//     observer.observe(chapter);
// });
