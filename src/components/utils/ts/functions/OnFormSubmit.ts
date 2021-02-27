async function OnSubmit (e: any): Promise<any> {
  e.preventDefault();
  // Check credentials
  try {
    await 'login';
  } catch (e) {

  }
}

export default OnSubmit;