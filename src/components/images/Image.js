import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ImageStyle = (width, height) => {
  return {
    width,
    height,
    objectFit: "cover"
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool
}

export default function Image({ src, isSelected, onImageClick, width, height }) {

    return (
      <div className={`responsive${isSelected ? " selected" : ""}`}
        onClick={onImageClick}>
        <img src={src}
          className={`thumbnail${isSelected ? " selected" : ""}`}
          style={ImageStyle(width, height)}
        />
        <div className="checked">
          <div className="icon"/>
        </div>
      </div>
    )
  }

  //<span className="badge badge-pill badge-secondary" style={{ height: "50px", width: "50px", fontSize: "xx-large"}}>{pickedIndex}</span>