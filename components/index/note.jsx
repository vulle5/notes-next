import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ note }) => (
  <div className="container">
    {note.title && <h4 className="title">{note.title}</h4>}
    {note.content && <p>{note.content}</p>}
    <style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
        max-height: 400px;
        width: 250px;
        padding: 0.5rem;
        border: 1px solid ${note.color ?? 'black'};
        border-radius: 0.5rem;
        margin: 0.5rem;
      }
      .title {
        color: red;
        margin-bottom: 0.5rem;
        width: 100%;
      }
    `}
    </style>
  </div>
)

Note.defaultProps = {
  note: {}
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    content: PropTypes.string
  })
}

export default Note
