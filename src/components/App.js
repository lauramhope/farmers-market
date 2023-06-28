import React from 'react';
import Header from './Header';
import LocationControl from './LocationControl';
import ProduceControl from './ProduceControl';

function App() {
  return (
    <React.Fragment>
      <Header/> 
      <ProduceControl/>
      <LocationControl />
    </React.Fragment>
  );
}

export default App;