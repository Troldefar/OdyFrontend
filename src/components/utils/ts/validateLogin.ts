import validateInput from './validateInput';

const validateLogin = async (username: string, password: string): Promise<any> => {
  try {
    await validateInput(username);
    await validateInput(password);
    await fetch(process.env.api + '/login')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch(e) {
    return false;
  }
}

export default validateLogin;