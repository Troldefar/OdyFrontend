import { useDispatch } from 'react-redux';

async function OnSubmit (e: any): Promise<any> {
  const dispatch = useDispatch();
  
  e.preventDefault();
  // Check credentials
  try {
    await 'login';
  } catch (e) {

  }
}

export default OnSubmit;