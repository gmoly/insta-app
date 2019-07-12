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

export default function Image({ src, width, height, selectedIndex }) {

    return (
      <React.Fragment>
        <div className={`responsive${selectedIndex > 0 ? " selected" : ""}`}>
          <img src={src}
            className={`thumbnail${selectedIndex > 0 ? " selected" : ""}`}
            style={ImageStyle(width, height)}
          />
        </div>
        <div className={ selectedIndex > 0 ? "checked" : "unchecked"}>
          <span className="font-weight-bold text-center">{selectedIndex}</span>
        </div>
      </React.Fragment>
    )
  }