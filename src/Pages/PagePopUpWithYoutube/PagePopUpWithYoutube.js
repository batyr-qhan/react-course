import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-modal'
// import YouTube from 'react-youtube'
import css from './PagePopUpWithYoutube.module.scss'
import ReactPlayer from 'react-player'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function PagePopUpWithYoutube () {
  // let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  // function afterOpenModal () {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00'
  // }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <>
      <Button variant='primary' onClick={openModal}>
        Launch demo modal
      </Button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >

        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal} className={css.button}>close</button>
        <ReactPlayer
          url='https://vimeo.com/49384334'
          playing='true'
          controls='true'
          volume={0}
        />
      </Modal>
    </>
  )
}

export default PagePopUpWithYoutube
