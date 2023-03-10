import FormWrapper from "./FormWrapper"

type AccountData = {
    email: string,
    password: string
}


type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData> ) => void
}

const AccountForm = ({email, password, updateFields}:AccountFormProps ) => {
    return (
       <FormWrapper title='Contacts'>
          <label className='form-label'>Email</label>
          <input className="form-control" 
          autoFocus required type='email' 
          value={email}
          onChange={e=> updateFields({email: e.target.value
          })}/>
          <label className='form-label'>Password</label>
          <input className="form-control" required type='password'
          value={password}
          onChange={e=> updateFields({password: e.target.value
          })} />
       </FormWrapper>
    )
  }
  
  export default AccountForm