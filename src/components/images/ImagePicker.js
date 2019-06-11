import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import Modal from 'react-bootstrap/Modal'
import ImageCarousel from '../images/image-carousel';

import './Images.scss'
import Image from './Image'

const handleShow = (useShow) => {
  useShow(true)
};

const handleHide = (useShow) => {
  useShow(false)
};

export default function ImagePicker({ multiple, onPick, images }) {

    const [picked, usePicked] = useState(Map());
    const [show, useShow] = useState(false);
    const [modalMedia, useModalMedia] = useState();

    return (
      <div className="image_picker row mx-auto">
        { images.map( (image, i) => renderImage(image, i, useShow, useModalMedia)) }
        <div className="clear"/>
        <Modal
          show={ show }
          onHide={() => handleHide(useShow) }
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageCarousel media = { modalMedia }/>
          </Modal.Body>
        </Modal>
      </div>
    )

    function renderImage(image, i, useShow, useModalMedia) {

      const isDisabled = image.object.carousel ? '' : 'true';

      return (
          <div key={"image_"+i} className="card mx-5 my-3 ">
            <h3 className="card-header mb-3">Card header</h3>
            <Image 
              src={image.src}
              isSelected={ picked.has(image.value)} 
              onImageClick={() => handleImageClick(image)} 
              key={i}
            />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer text-muted">
              <button onClick={() => { useModalMedia(image.object); handleShow(useShow) } } className="btn btn-primary" disabled={ isDisabled }>All foto</button>
            </div>
          </div>
      )
    }
    
    function handleImageClick(image) {
      const pickedImage = multiple ? picked : Map()
      const newerPickedImage = 
        pickedImage.has(image.value) ? 
          pickedImage.delete(image.value) : 
            pickedImage.set(image.value, image.object)
            usePicked(newerPickedImage)
    
      const pickedImageToArray = []
      newerPickedImage.map((image, i) => pickedImageToArray.push({src: image, value: i}))
      
      onPick(multiple ? pickedImageToArray : pickedImageToArray[0])
    }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}