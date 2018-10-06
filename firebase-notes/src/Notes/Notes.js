import './Notes.css';

import PropTypes from 'prop-types';
import React from "react";

class Notes extends React.Component {

    constructor(props) {
        super(props);
        
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this)
    }

    handleRemoveNote(id) {
        this.props.removeNote(id);
    }

    render(props) {
        return (
            <div className="note fade-in">
            <span className="closebtn" onClick={() => this.handleRemoveNote(this.noteId)}>
                &times;
            </span>
                <p className="noteContent">{this.noteContent}</p>
            </div>
        )
    }
}

Notes.propTypes = {
    noteContent: PropTypes.string
}

export default Notes;