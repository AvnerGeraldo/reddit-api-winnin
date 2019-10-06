import React from 'react';
import './App.css';

//Components
import Box from './components/styled-components/Box'
import Button from './components/styled-components/Button'

function App() {
  return (
    <div className="App">
      <Box style={{
        padding: '0 5px'
      }}>Winnin</Box>
      <Box>
        <Button>HOT</Button>
        <Button>NEWS</Button>
        <Button>RISING</Button>
      </Box>
      <Box>
        <Box>Post Item</Box>
        <Button>More Posts</Button>
      </Box>
    </div>
  );
}

export default App;
