import FormWrapper from './FormWrapper';


type UseData = {
    firstName: string
    lastName: string
    age: string
  }
  
type UserFormProps = UseData & {
    updateFields: (fields: Partial<UseData>) => void
  }
  

function UseForm({
    firstName, 
    lastName, 
    age,
    updateFields
}:
    UserFormProps){
  return (
    <FormWrapper title='User Details'>
        <label className='form-label'
        >First Name</label>
        <input 
        className="form-control" 
        autoFocus required 
        type='text' 
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}/>
        <label className='form-label'>Last Name</label>
        <input className="form-control" 
        required 
        type='text' 
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}/>
        <label className='form-label'>Age</label>
        <input className="form-control" 
        required min={1} 
        type='number' 
        value={age}
        onChange={e => updateFields({ age: e.target.value })}/>
    </FormWrapper>  
  )
}

export default UseForm;