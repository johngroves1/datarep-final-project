import { Component } from "react";


export class AlbumItem extends Component{
    render(){
        return(
            <div>
                <img src={this.props.album.Cover} width="200" height="200"></img>
                <h4>{this.props.album.Title}</h4>
                <p>{this.props.album.Year}</p>
                <p>{this.props.album.Artist}</p>   
            </div>
        );
    }
}