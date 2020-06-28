/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function ResizableTextarea({
  minRows: propMinRows,
  maxRows: propMaxRows,
  ...textareaProps
}) {
  const minRows = propMinRows ?? 5
  const maxRows = propMaxRows ?? 10
  const [value, setValue] = useState('')
  const [rows, setRows] = useState(propMinRows)

  const handleChange = (event) => {
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

    setValue(event.target.value)
    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  return (
    <>
      <textarea
        rows={rows}
        value={value}
        onChange={handleChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...textareaProps}
      />
      <style jsx>
        {`
          textarea {
            all: unset;
            resize: none;
            overflow: hidden;
            padding-left: 0.5rem;
            margin-right: 0.5rem;
            margin: 0.5rem 0px;
          }
        `}
      </style>
    </>
  )
}

ResizableTextarea.propTypes = {
  minRows: PropTypes.number,
  maxRows: PropTypes.number
}
