import { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css';

export class AlbumItem extends Component {

    constructor() {
        super();

        this.DeleteAlbum = this.DeleteAlbum.bind(this);
    }

    DeleteAlbum(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.album._id);

        axios.delete("http://localhost:4000/api/albums/" + this.props.album._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            <div>
                <br></br>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.album.cover} />
                    <Card.Body>
                        <Card.Title>{this.props.album.title}</Card.Title>
                        <Card.Text>
                            {this.props.album.artist}
                        </Card.Text>
                    </Card.Body>
                    <div className="btn1">
                        <Link to={"/updateAlbum/" + this.props.album._id} className="btn btn-primary" >Edit</Link>
                        <Button variant="danger" className="btn2" onClick={this.DeleteAlbum}>Delete</Button>
                    </div>
                </Card>



            </div>
        );
    }
}