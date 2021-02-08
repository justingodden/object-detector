import React from 'react'

function ImageContainer({ image, setImage, classes }) {
    return (
        <>
            <img src={image} alt={"snap"} className="photo"/>
            {/* <canvas id="canvas" width="600" height="399"></canvas> */}
        </>
    )
}

export default ImageContainer
