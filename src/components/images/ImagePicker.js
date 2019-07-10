import React, { useState } from 'react'
import PropTypes from 'prop-types'
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

function ModalHeader({ media }) {
  return (media.location.name) ? media.location.name : "";
}

export default function ImagePicker({ multiple, onPick, images }) {

    const [picked, usePicked] = useState([]);
    const [show, useShow] = useState(false);
    const [modalMedia, useModalMedia] = useState();

    return (
      <div className="image_picker row">
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
              <ModalHeader media = { modalMedia }/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageCarousel media = { modalMedia }/>
          </Modal.Body>
        </Modal>
      </div>
    )

    function renderImage(image, i, useShow, useModalMedia) {

      const isDisabled = image.object.carousel ? false : true;

      return (
          <div key={"image_"+i} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-img-top" onClick={() => handleImageClick(image)}>
                <Image 
                    src={image.src}
                    width={'100%'}
                    height={240}
                    key={i}
                    selectedIndex = { picked.findIndex(item => item.value === image.value) + 1 }
                  />
              </div>
              <div className="card-body">
                <p className="card-text">{image.object.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" onClick={() => { useModalMedia(image.object); handleShow(useShow) } } className="btn btn-sm btn-outline-secondary" disabled={ isDisabled }>All foto</button>
                </div>
              </div>
            </div>
          </div> 
      )
    }

    function handleImageClick(image) {
      var pickedImage = multiple ? picked : []
      const index = pickedImage.findIndex(item => item.value === image.value);
      index >= 0 ? pickedImage.splice(index, 1) : pickedImage.push({ value: image.value, object: image.object})
      usePicked(pickedImage)
    
      const pickedImageToArray = []
      pickedImage.map((item, i) => pickedImageToArray.push({src: item.object, value: i}))
      onPick(multiple ? pickedImageToArray : pickedImageToArray[0])
    }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}