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
        style={{ overlay: { backgroundColor: 'unset' } }}
      >
        {children}
      </ReactModal>
    </>
  )
}

const styles = {
  modalOpen: 'filter: blur(8px); transition: filter .5s cubic-bezier(0.15, 1, 0.75, 1);'
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func
}

export default Modal
