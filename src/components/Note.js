import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './Component.css'
import { deleteNote } from '../actions/noteActions'

export class Note extends Component {

    handleNoteShowPageClick = () => {
        this.props.history.push({
            pathname: `/notes/${this.props.note.id}`,
            state: { note: this.props.note }
        })
    }

   

    render() {
        return (
            <div>
                <h5>{this.props.note.title}</h5>
                <p>{this.props.note.content}</p>
                <div>
                    <button  onClick={this.handleNoteShowPageClick}>show my note</button>
                    <button conClick={() => this.handleNoteDeleteClick(this.props.note.id)}>Delete me</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (noteId) => dispatch(deleteNote(noteId))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Note))
