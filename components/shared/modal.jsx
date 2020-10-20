import { useEffect } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import Card from './card'
import Icon from './Icon'

const Modal = ({
  children,
  isOpen,
  onRequestClose,
  onAfterOpen,
  modalStyles,
  ...modalProps
}) => {
  useEffect(() => {
    ReactModal.setAppElement('#__next')
  }, [])

  const handleModalClose = () => {
    handleCloseModalStyles()
    onRequestClose && onRequestClose()
  }

  const handleModalOpen = () => {
    handleOpenModalStyles()
    onAfterOpen && onAfterOpen()
  }

  return (
    <ReactModal
      closeTimeoutMS={200}
      id="modal-content"
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      onAfterOpen={handleModalOpen}
      style={styles(modalStyles).modal}
      {...modalProps}
    >
      <Card containerStyles={{ padding: '1rem' }} shadow="none">
        <div className="close-button">
          <Icon onClick={handleModalClose} name="times-circle" size="lg" />
        </div>
        {children}
      </Card>
      <style jsx>
        {`
          .close-button {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </ReactModal>
  )
}

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
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func
}

const concatModalContentStyle = cssStyles => {
  const modalContent = document.getElementById('modal-content')
  modalContent.style = modalContent.style.cssText.concat(' ', cssStyles)
}

const handleCloseModalStyles = () => {
  document.getElementById('__next').style.removeProperty('filter')
  concatModalContentStyle(modalTransitionStyles.modalContentOnClose)
}

const handleOpenModalStyles = () => {
  document.getElementById('__next').style = modalTransitionStyles.modalOpen
  concatModalContentStyle(modalTransitionStyles.modalContentOnOpen)
}

// Adjust top and max-width to play with modal size
const styles = ({ overlay, content }) => ({
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

const modalTransitionStyles = {
  modalOpen:
    'filter: blur(8px); transition: filter .4s cubic-bezier(0.15, 1, 0.75, 1);',
  modalContentOnOpen:
    'transform: translate(-50%, -50%) scale(1); opacity: 1; transition: transform .4s cubic-bezier(0.15, 1, 0.75, 1), opacity .4s',
  modalContentOnClose:
    'transform: translate(-50%, -50%) scale(0.33); opacity: 0; transition: transform .2s cubic-bezier(0.15, 1, 0.75, 1), opacity .2s'
}

export default Modal
