import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import UploadButton from './components/UploadButton';
import PredictedClasses from './components/PredictedClasses';

function App() {
  const [image, setImage] = useState("")

  return (
    <div className="App">
        <Header />
        <ImageContainer image={image} setImage={setImage}/>
        <UploadButton image={image} setImage={setImage}/>
        <PredictedClasses />
    </div>
  );
}

export default App;
