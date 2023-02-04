import React from 'react';
import FormWrapper from './FormWrapper';

type AdressData = {
    street: string,
    city: string,
    state: string,
    zip: string,
}

type AdressFormProps = AdressData & {
    
    updateFields: (fields: Partial<AdressData> ) => void
}

const AdressForm = ({ street, city, state, zip, updateFields }: AdressFormProps) => {


    return (
       <FormWrapper title='Adress Information'>
          <label className='form-label'>Street</label>
          <input className="form-control" 
          autoFocus required type='text'
          value={street=''}
          onChange={e=> updateFields({ street: e.target.value })} />
          <label className='form-label'>City</label>
          <input className="form-control" required type='text' 
          value={city}
          onChange={e=> updateFields({ city: e.target.value })} />
          <label className='form-label'>State</label>
          <input className="form-control" required type='text'
          value={state}
          onChange={e=> updateFields({ state: e.target.value })} /> 
          <label className='form-label'>Zip</label>
          <input className="form-control" required min={1} type='text'
          value={zip}
          onChange={e=> updateFields({ zip: e.target.value })} /> 
       </FormWrapper>
    )
  }
  
  export default AdressForm