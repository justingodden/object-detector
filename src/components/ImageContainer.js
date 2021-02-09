import React from 'react'

function ImageContainer({ image, setImage, classes }) {
    return (
        <>
            <img src={image} alt={"snap"} className="photo"/>
            <canvas className="canvas" width="600px" height="399px"></canvas>
        </>
    )
}

export default ImageContainer
