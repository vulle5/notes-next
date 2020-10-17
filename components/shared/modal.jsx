import { useEffect } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ children, isOpen, onRequestClose, modalStyles }) => {
  const { modal, modalOpen, modalContentOnOpen } = styles(modalStyles)

  useEffect(() => {
    ReactModal.setAppElement('#__next')
  }, [])

  const onModalOpen = () => {
    document.getElementById('__next').style = modalOpen
    const content = document.getElementsByClassName('ReactModal__Content')
    content[0].style = content[0].style.cssText.concat(' ', modalContentOnOpen)
  }

  const onModalClose = () => {
    document.getElementById('__next').style.removeProperty('filter')
    onRequestClose && onRequestClose()
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onModalClose}
        onAfterOpen={onModalOpen}
        style={modal}
      >
        {children}
      </ReactModal>
    </>
  )
}

// Adjust top and max-width to play with modal size
const styles = ({ overlay, content }) => ({
  modalOpen: 'filter: blur(8px); transition: filter .4s cubic-bezier(0.15, 1, 0.75, 1);',
  modalContentOnOpen: 'transform: translate(-50%, -50%) scale(1); opacity: 1; transition: transform .4s cubic-bezier(0.15, 1, 0.75, 1), opacity .4s',
  modal: {
    overlay: {
      backgroundColor: 'unset',
      ...overlay
    },
    content: {
      position: 'relative',
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: 0,
      border: 'transparent',
      background: 'none',
      transform: 'translate(-50%, -50%) scale(0.75)',
      opacity: 0.66,
      ...content
    }
  }
})

Modal.defaultProps = {
  modalStyles: {}
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modalStyles: PropTypes.shape({
    overlay: PropTypes.shape({}),
    content: PropTypes.shape({})
  }),
  onRequestClose: PropTypes.func
}

export default Modal
