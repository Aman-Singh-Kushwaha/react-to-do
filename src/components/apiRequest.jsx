const apiRequest = async (url='', optionsObj = null, errMsq=null) => {
  // console.log("THia ia obj", optionsObj.body)
  try{
    const response = await fetch(url, optionsObj);
  
    if(!response.ok) throw Error('Please reload th app')

  } catch (err){
    errMsq = err.message;
  } finally {
    return errMsq;
  }
}

export default apiRequest