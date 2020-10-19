import { useEffect } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ children, isOpen, onRequestClose, modalStyles, ...modalProps }) => {
  const { modal, modalOpen, modalContentOnOpen, modalContentOnClose } = styles(modalStyles)

  useEffect(() => {
    ReactModal.setAppElement('#__next')
  }, [])

  const concatModalContentStyle = cssStyles => {
    const modalContent = document.getElementById('modal-content')
    modalContent.style = modalContent.style.cssText.concat(' ', cssStyles)
  }

  const onModalOpen = () => {
    document.getElementById('__next').style = modalOpen
    concatModalContentStyle(modalContentOnOpen)
  }

  const onModalClose = () => {
    document.getElementById('__next').style.removeProperty('filter')
    concatModalContentStyle(modalContentOnClose)
    onRequestClose && onRequestClose()
  }

  return (
    <ReactModal
      closeTimeoutMS={200}
      id="modal-content"
      isOpen={isOpen}
      onRequestClose={onModalClose}
      onAfterOpen={onModalOpen}
      style={modal}
      {...modalProps}
    >
      {children}
    </ReactModal>
  )
}

// Adjust top and max-width to play with modal size
const styles = ({ overlay, content }) => ({
  modalOpen: 'filter: blur(8px); transition: filter .4s cubic-bezier(0.15, 1, 0.75, 1);',
  modalContentOnOpen: 'transform: translate(-50%, -50%) scale(1); opacity: 1; transition: transform .4s cubic-bezier(0.15, 1, 0.75, 1), opacity .4s',
  modalContentOnClose: 'transform: translate(-50%, -50%) scale(0.33); opacity: 0; transition: transform .2s cubic-bezier(0.15, 1, 0.75, 1), opacity .2s',
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
