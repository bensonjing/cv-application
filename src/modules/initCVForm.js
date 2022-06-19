import uniqid from 'uniqid'

const initCVForm = {
  personalInfo: {
    firstName: '', 
    lastName: '', 
    title: '', 
    address: '', 
    phoneNumber: '', 
    email: '', 
    description: '', 
  }, 
  experience: [
    {
      id: uniqid(), 
      position: '', 
      company: '', 
      city: '', 
      from: '', 
      to: '',
    },
  ], 
  education: [
    {
      id: uniqid(), 
      name: '', 
      city: '', 
      degree: '', 
      subject: '', 
      from: '', 
      to: '', 
    }, 
  ], 
}

export default initCVForm
