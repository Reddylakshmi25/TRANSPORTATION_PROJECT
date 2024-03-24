import Header from "./components/Header";
import  Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { Outlet } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";

import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('http://your-backend-url/upload', formData)
      .then(response => {
        setProcessedImage(response.data.processedImageUrl);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };


  return (
    <>
    <Header/>
    <Container>
      <main>
        <Outlet/>
        <div className="container">
              <h1>Transportation Image Object Detection</h1>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload Image</button>
              {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
              {processedImage && <img src={processedImage} alt="Processed" />}
        </div>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
