import '../../App.css'

import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from "../Layout/Spinner";
import axios from 'axios';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    axios
      .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${ this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        this.setState({
          lyrics: res.data.message.body.lyrics
        })
        return axios
          .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${ this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
      })

      .then(res => {
        console.log(res.data)
        this.setState({
          track: res.data.message.body.track
        })
      })

      .catch(err => console.log(err));
  }

  render() {

    const {
      track,
      lyrics
    } = this.state;

    if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
      return <Spinner / >
    } else {
      return (
        <React.Fragment>
          <Link  to="/"  className="btn btn-dark">Go Back</Link>
            <h1>  {track.track_name} by  {track.artist_name}</h1> 
              <br/>
         <h5>{lyrics.lyrics_body}</h5>


           <strong>Release Date</strong>:{' '}
              <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
        </React.Fragment>
      )
    }
  }
}

export default Lyrics;