import { Component } from "react";
import axios from 'axios';
import '../App.css';

export class AddAlbum extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);


        this.state = {
            cover: '',
            title: '',
            artist: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        });
    }

    onChangeCover(e) {
        this.setState({
            cover: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Album: " + this.state.cover + " " +
            this.state.title + " " + this.state.artist);

        const newAlbum = {
            cover: this.state.cover,
            title: this.state.title,
            artist: this.state.artist
        }

        axios.post('http://localhost:4000/api/albums', newAlbum)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //axios post request for server!

    render() {
        return (
            <div className="background2">
            <div className="addAlbum">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Album Cover: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.cover}
                            onChange={this.onChangeCover}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Artist: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.artist}
                            onChange={this.onChangeArtist}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Album'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}