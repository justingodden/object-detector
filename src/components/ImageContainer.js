import React from 'react'

function ImageContainer({ image, setImage, classes }) {
    return (
        <>
            <img src={image} alt={"snap"} className="photo"/>
            {/* <canvas className="canvas" ></canvas> */}
        </>
    )
}

export default ImageContainer
