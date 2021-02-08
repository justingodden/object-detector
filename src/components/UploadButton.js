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

function UploadButton() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
                Upload a Photo
                <PhotoCameraRoundedIcon className={classes.icon}/>
            </Button>
        </div>
    )
}

export default UploadButton
