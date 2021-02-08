import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },},
        icon: {
        marginLeft: theme.spacing(1),
    }
}));

function UploadButton({ image, setImage }) {
    const classes = useStyles();

    const handleCapture = (target) => {
    if (target.files) {
        if (target.files.length !== 0) {
            const file = target.files[0];
            const newUrl = URL.createObjectURL(file);
            setImage(newUrl);
            }
        }
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
                onChange={(e) => handleCapture(e.target)}
            />
                Upload a Photo
                <PhotoCameraRoundedIcon className={classes.icon}/>
            </Button>
            </label>
        </div>
    )
}

export default UploadButton
