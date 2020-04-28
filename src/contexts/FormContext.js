import React, { useState } from 'react'

export const FormContext = React.createContext(null);

export const FormProvider = ({ children }) => {

    const [name, setName] = useState(File)

    return (
        <FormContext.Provider value={{ name, setName }}>
            {children}
        </FormContext.Provider>
    );

};
