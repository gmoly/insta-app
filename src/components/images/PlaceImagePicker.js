import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import './Images.scss'
import Image from './Image'

export default function PlaceImagePicker({ multiple, onPick, images }) {

    const [picked, usePicked] = useState(Map());

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
                isSelected={ picked.has(image.value)} 
                onImageClick={() => handleImageClick(image)} 
                width={180}
                height={180}
                key={i}
              />
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

PlaceImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}