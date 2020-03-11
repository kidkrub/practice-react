import React from 'react';
import './App.css';
import Button from './components/Button';
import InputBox from './components/InputBox';
import Focus from './components/Focus';
import GetFile from './components/GetFile';
import ChildrenComp from './components/ChildrenComp';

const childrencomponent = React.createRef<ChildrenComp>()
const handleClick = () => {
  childrencomponent.current?.showAlert()
}

function App() {
  return (
    <div>
      <InputBox name="name" />
      <InputBox name="email" />
      <Button name="App"/>
      <Focus />
      <GetFile />
      <ChildrenComp ref={childrencomponent}/>
      <button onClick={handleClick}>Get Component</button>
    </div>
  );
}

export default App;
