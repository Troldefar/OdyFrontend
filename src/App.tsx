import { useEffect } from 'react';

import Form from './components/el/Form';

function App() {
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then(res => {
        console.log(res);
      })
  }, []);
  return (
    <div className="App">
      <Form identifier="login" />
    </div>
  );
}

export default App;
