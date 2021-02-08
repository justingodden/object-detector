import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import UploadButton from './components/UploadButton';
import PredictedClasses from './components/PredictedClasses';


function App() {
  const [image, setImage] = useState(null)
  const [classes, setClasses] = useState(null)

  return (
    <div className="App">
        <Header />
        <ImageContainer
          image={image}
          setImage={setImage}
          classes={classes}
        />
        <UploadButton
          image={image}
          setImage={setImage}
          setClasses={setClasses}
        />
        <PredictedClasses />
    </div>
  );
}

export default App;
