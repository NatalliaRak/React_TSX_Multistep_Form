import React, { ReactNode } from 'react';

type FormWrapperProps = {
    title: string,
    children: ReactNode
}


function FormWrapper({ title, children}: FormWrapperProps) {
   

    return(
        <>
        <h2 className='text-center mb-3'>
            {title}
         </h2>
         <div className='p-2'>
            {children}
         </div>
        </>
    )
}

export default FormWrapper;