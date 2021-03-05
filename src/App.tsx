import { useState } from 'react';
import Form from './components/el/Form';

interface Props {
  name: string;
}

const HelloWOrld: React.FC<Props> = ({name}) => {
  const [state, setState] = useState<{ name: string | null }>({name: ''});
  return <div>Hello {name}</div>
}

interface SubmitProps<T> {
  values: T
  children: (values: T) => JSX.Element
}

const Submit = <T extends {}>({values, children}: SubmitProps<T>) => {
  return children(values);
}

function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
  