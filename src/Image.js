import React from 'react'

export default function Image(props) {
  const style = {
    backgroundImage: `url("${props.src}")`,
    backgroundSize: 'cover',
    // backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div style={style}
      className="Chooser-ProductImage"
    />
)
}
