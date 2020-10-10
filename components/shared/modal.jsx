import { useEffect } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ children, isOpen, onRequestClose }) => {
  useEffect(() => {
    ReactModal.setAppElement('#__next')
  }, [])

  const onModalOpen = () => {
    document.getElementById('__next').style = styles.modalOpen
  }

  const onModalClose = () => {
    document.getElementById('__next').style.filter = 'blur(0px)'
    onRequestClose && onRequestClose()
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onModalClose}
        onAfterOpen={onModalOpen}
        style={styles.modal}
      >
        {children}
      </ReactModal>
    </>
  )
}

const styles = {
  modalOpen: 'filter: blur(8px); transition: filter .4s cubic-bezier(0.15, 1, 0.75, 1);',
  modal: {
    overlay: {
      backgroundColor: 'unset'
    },
    content: {
      position: 'relative',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: 500,
      padding: 0,
      border: 'transparent',
      background: 'none',
      margin: '0.5rem'
    }
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func
}

export default Modal
