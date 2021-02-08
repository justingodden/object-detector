import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import * as tf from "@tensorflow/tfjs";
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from '@tensorflow-models/coco-ssd';


// console.log("loading model")
// const model = cocoSsd.load()
// console.log("model loaded")

let modelPromise;
modelPromise = cocoSsd.load();

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },},
        icon: {
        marginLeft: theme.spacing(1),
    }
}));

function UploadButton({ image, setImage, setClasses }) {
    const classes = useStyles();

    const handleUpload = async (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setImage(newUrl);
                }
            }
        }
    
    const handleDetect = async (target) => {
        let imageElement = document.querySelector('.photo')
        console.log(imageElement)
        const model = await modelPromise;
        console.log(model)
        let result = await model.detect(imageElement);
        console.log(result)
        setClasses(result)
        }
        
    return (
        <div className={classes.root}>
            <label htmlFor="icon-button-file">
            <Button variant="contained" color="primary" component="span">
                <input
                    className="fileUpload"
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    capture="environment"
                    onChange={(e) => handleUpload(e.target)}
                />
                Upload a Photo
                <PhotoCameraRoundedIcon className={classes.icon}/>
            </Button>
            </label>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => handleDetect()}
            >
                Generate Labels
            </Button>
        </div>
    )
}

export default UploadButton
