import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CrossfadeImage from 'react-crossfade-image';

import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    fetchImage();
    // const interval = setInterval(() => {
    //   setVector(vector => vector.map((v) => v + diff));
    // }, 15000);
    // return () => clearInterval(interval);
  }, []);

  const fetchImage = async () => {
    console.log('started querying image...')
    axios
      .get('https://nude-server.herokuapp.com/image')
      .then(response => {
        console.log(response);
        const encodedImage = 'data:image/png;base64,' + response.data;
        setDisplay(encodedImage);
        // Update the display state

        // Update loading state
        // setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the image: ${error}`))
  }

  return (
    <div className="App">
      <img src={display} style={{width: 2160, height: 3840}}/>
      {/* <CrossfadeImage src={display} duration={1000} style={{width: 2160, height: 3840}}/> */}
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import './App.css';

const vectorSize = 512;
const repeat = 10;
const diff = 200;

const model0 = new window.rw.HostedModel({
  url: "https://stylegan2-421c1675.hosted-models.runwayml.cloud/v1/",
  token: "nS4nJEeBNhrHE4f5VQcdNA==",
});

const model = new window.rw.HostedModel({
  url: "https://nudedescending-9a59860e.hosted-models.runwayml.cloud/v1/",
});

const defArray = () => {
  const arr = [];
  for (var i = 0; i < vectorSize; i++)
    arr.push(i);
  return arr;
}

const randArray = () => Array(vectorSize).fill().map(() => Math.round(Math.random() * vectorSize));

function App() {
  const [display, setDisplay] = useState(0);
  const [feed, setFeed] = useState(0);
  const [vector, setVector] = useState(defArray);

  const getInfo = async () => {
    console.log('getting model info...');
    const info = await model.info();
    console.log(info);
  };

  const getImage = async (inputs) => {
    console.log('querying image...')
    const outputs = await model.query(inputs);
    const { image } = outputs;
    console.log('got image');
    setDisplay(image);
  };

  useEffect(() => {
    // getInfo();
    console.log(model);
    const interval = setInterval(() => {
      // setFeed(feed => feed + 1);
      setVector(vector => vector.map((v) => v + diff));
      // setVector(randArray());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const index = Math.floor(feed / 10) % vectorSize;
  //   setVector(vector => vector.map((v, i) => v + (i === index ? diff : 0)));
  // }, [feed]);

  useEffect(() => {
    console.log('vector value : ', vector);
    const inputs = {
      "z": vector,
      "truncation": 0.8
    };
    console.log(inputs);
    // getImage(inputs);
  }, [vector]);

  return (
    <div className="App">
        <CrossfadeImage src={display.toString()} duration={12000} style={{width: 2160, height: 3840}}/>
      </div>
    );
  }
  
  export default App;
*/
