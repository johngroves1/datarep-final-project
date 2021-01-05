import { Component } from "react";
import { Albums } from "./albums";
import axios from 'axios';
import '../App.css';

export class DisplayAlbum extends Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        albums: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
            .then(
                (response) => {
                    console.log(response.data)
                    this.setState({ albums: response.data })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                this.setState({ albums: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="displayStyle">
                <div style={{ display: 'inline-block' }}>
                    <Albums music={this.state.albums} ReloadData={this.ReloadData}></Albums>
                </div>
            </div>
        );
    }
}

