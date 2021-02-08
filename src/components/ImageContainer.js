import React from 'react'

function ImageContainer({ image, setImage }) {
    return (
        <>
            {image ? <img src={image} alt={"snap"} className="photo"/> : <div className="imageContainer" />}
        </>
    )
}

export default ImageContainer
