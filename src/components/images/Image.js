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

export default function Image({ src, onImageClick, width, height, selectedIndex }) {

    return (
      <div className={`responsive${selectedIndex > 0 ? " selected" : ""}`}
        onClick={onImageClick}>
        <img src={src}
          className={`thumbnail${selectedIndex > 0 ? " selected" : ""}`}
          style={ImageStyle(width, height)}
        />
        <div className="checked">
        <span className="badge badge-pill badge-secondary" style={{ height: "50px", width: "50px", fontSize: "xx-large"}}>{selectedIndex}</span>
        </div>
      </div>
    )
  }