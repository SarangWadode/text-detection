import React from 'react'
import './style.css'

export default function Upload() {
  return (
    <div className='upload'>
      <h2>Upload your Image</h2>
      <div className="type">File should be jpeg, png ...</div>
      <input className='img' type='file' name='image' accept='image/*' />
    </div>
  )
}
