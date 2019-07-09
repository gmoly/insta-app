import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import './Images.scss'
import Image from './Image'

export default function PlaceImagePicker({ multiple, onPick, images }) {

    const [picked, usePicked] = useState(images.map( (image) => { return { value: image.value, object: image.object} } ));

    return (
        <div className="image_picker row mx-auto">
          { images.map( (image, i) => renderImage(image, i)) }
        </div>
    )

    function renderImage(image, i) {
      return (
          <div key={"image_"+i} className="col-lg-3 col-md-4 col-xs-6 thumb">
              <Image 
                src={image.src}
                onImageClick={() => handleImageClick(image)} 
                width={180}
                height={180}
                key={i}
                selectedIndex = { picked.findIndex(item => item.value === image.value) + 1 }
              />
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

PlaceImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}