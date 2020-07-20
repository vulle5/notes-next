/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ResizableTextarea = ({
  minRows,
  maxRows,
  textareaRef,
  ...textareaProps
}) => {
  const [rows, setRows] = useState(minRows)

  const handleChange = event => {
    const textareaLineHeight = 24

    const previousRows = event.target.rows
    event.target.rows = minRows // reset number of rows in textarea

    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  return (
    <>
      <textarea
        rows={rows}
        onChange={handleChange}
        ref={textareaRef}
        {...textareaProps}
      />
      <style jsx>
        {`
          textarea {
            all: unset;
            resize: none;
            overflow-y: auto;
            overflow-wrap: break-word;
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  )
}

ResizableTextarea.defaultProps = {
  minRows: 5,
  maxRows: 10,
  textareaRef: null
}

ResizableTextarea.propTypes = {
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  textareaRef: PropTypes.shape({})
}

export default ResizableTextarea
