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
          <div key={"image_"+i} className="card mx-5 my-3 ">
            <h3 className="card-header mb-3">{image.object.location.name}</h3>
            <Image 
              src={image.src}
              onImageClick={() => handleImageClick(image)} 
              width={300}
              height={180}
              key={i}
              selectedIndex = { picked.findIndex(item => item.value === image.value) + 1 }
            />
            <div className="card-body">
              <p className="card-text">{image.object.description}</p>
            </div>
            <div className="card-footer text-muted">
              <button onClick={() => { useModalMedia(image.object); handleShow(useShow) } } className="btn btn-primary" disabled={ isDisabled }>All foto</button>
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