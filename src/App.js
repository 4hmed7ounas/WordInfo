import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode is Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark Mode is Disabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="WordInfo" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <TextForm name="Enter Text Here" mode={mode} showAlert={showAlert} /> */}
          <Routes>
            <Route path="/about" element={<About mode= {mode}/>}>
            </Route>
            <Route path="/" element={<TextForm name="Enter Text Here" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
