import React, { useState } from 'react'

export const GaleryContext = React.createContext(null);

export const GaleryProvider = ({ children }) => {

    const [ open, setOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState({
        id:1,
        title:'-',
        author:'-',
        reference:'-',
        description:'-'
    });
    const [currentColorPhoto, setCurrentColorPhoto ] = useState(null);

    return (
        <GaleryContext.Provider value={{ 
            currentPhoto, setCurrentPhoto, 
            open, setOpen,
            currentColorPhoto, setCurrentColorPhoto
        }}>
            {children}
        </GaleryContext.Provider>
    );

};
