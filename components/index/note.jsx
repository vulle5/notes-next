import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/shared/card'

const Note = ({ note }) => (
  <Card
    containerStyles={{ margin: '0.5rem' }}
    shadowSize="small"
  >
    <div className="container">
      {note.title && <h4 className="title">{note.title}</h4>}
      {note.content && <p className="content">{note.content}</p>}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          max-height: 400px;
          width: 250px;
          padding: 0.5rem;
        }
        .title {
          color: red;
          margin-bottom: 0.5rem;
          width: 100%;
        }
        .content {
          color: black;
        }
      `}
      </style>
    </div>
  </Card>
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
