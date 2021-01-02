import { Component } from "react";
import { AlbumItem } from "./albumItem";

export class Albums extends Component{
    render(){
        return this.props.music.map( (album)=>{
            return <AlbumItem album={album}></AlbumItem>
        })
    }
}