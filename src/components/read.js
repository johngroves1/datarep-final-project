import { Component } from "react";
import { Albums } from "./albums";

export class Read extends Component{

    state = {
        albums: [
            {
            "Title": "Madvillainy",
            "Year": "2004",
            "Artist": "Madlib, MF Doom",
            "Genre": "Hip-hop",
            "Cover": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Madvillainy_cover.png/220px-Madvillainy_cover.png"
            },
            {
            "Title": "Good Luck",
            "Year": "2020",
            "Artist": "Bladee, Mechatok",
            "Genre": "Hyper-pop",
            "Cover": "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fc7dbfee5d1bb00d270cd197e28f842fb.999x999x1.jpg"
            },
            {
            "Title": "E",
            "Year": "2019",
            "Artist": "Ecco2k",
            "Genre": "Alternative",
            "Cover": "https://media.pitchfork.com/photos/5e0e2624f3d2500009bb06d4/1:1/w_320/e_ecco2k.jpg"
            }
            ]
    };

    render(){
        return(
            <div>
                <Albums music={this.state.albums}></Albums>
            </div>
        );
    }
}