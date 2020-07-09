import React from 'react'
import PropTypes from 'prop-types'

import ResizableTextarea from 'components/shared/resizable-textarea'
import Button from 'components/shared/button'

const NewNoteForm = ({ showContent, setShowContent }) => {
  const onFormSubmit = event => {
    event.preventDefault()
    // TODO: Implement submit
  }

  const onTextAreaKeyPress = event => {
    if (event.which === 13 && !event.shiftKey) {
      event.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
      // Prevent actual keystroke from being registered
      event.preventDefault()
    }
  }

  return (
    <form className="wrapper" onSubmit={e => onFormSubmit(e)}>
      {showContent && (
        <input
          id="note-title"
          name="note-title"
          placeholder="Title"
          type="text"
        />
      )}
      <ResizableTextarea
        id="note-content"
        name="note-content"
        maxRows={5}
        minRows={1}
        onFocus={() => setShowContent(true)}
        onKeyPress={(e) => onTextAreaKeyPress(e)}
        placeholder="Remind me to..."
        type="text"
      />
      {showContent && <Button text="CREATE" type="submit" />}
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column
        }
        input {
          all: unset;
          height: 2rem;
          padding: 0px 0.5rem;
        }
      `}
      </style>
    </form>
  )
}

NewNoteForm.propTypes = {
  showContent: PropTypes.bool.isRequired,
  setShowContent: PropTypes.func.isRequired
}

export default NewNoteForm
