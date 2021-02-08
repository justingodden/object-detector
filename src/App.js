import './App.css';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import UploadButton from './components/UploadButton';
import PredictedClasses from './components/PredictedClasses';

function App() {
  return (
    <div className="App">
        <Header />
        <ImageContainer />
        <UploadButton />
        <PredictedClasses />
    </div>
  );
}

export default App;
