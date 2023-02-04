import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useMultiStep  from './Components/UseMultiStep'
import UseForm from './Components/UseForm';
import AdressForm from './Components/AdressForm';
import AccountForm from './Components/AccountForm';
import {useState, FormEvent } from 'react';


type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}


const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }


  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next  } = useMultiStep([
  <UseForm {...data} updateFields={updateFields}/>,
  <AdressForm {...data} updateFields={updateFields} />,
  <AccountForm {...data} updateFields={updateFields} />
  ])

  function onSubmit(e: FormEvent) {
      e.preventDefault()
      next()
  }

  return (
    <div className="App">
      <h1>You can do it</h1>
       <form className='border border-success rounded-3 container fluid p-2'
       onSubmit={onSubmit}>
            <div className='d-flex justify-content-end'>{currentStepIndex+1} / {steps.length}</div>
            <div>
              {step}
            </div>
            <div className='d-flex justify-content-end'>
             { !isFirstStep && 
             <button className='border border-secondary rounded'
             type='submit'
             onClick={back}>
              Back</button> }
               <button className='border border-secondary rounded'
               type='submit'
               onClick={next}>
              
               { isLastStep ? 'Finish': 'Next' }
                </button>
            </div>    
       </form>

     
    </div>
  )
}

export default App
