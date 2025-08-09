import React, { createContext } from 'react';

// 1. Create and export the context
export const AppContext = createContext();

// 2. Create the provider component
const ContextProvider = (props) => {
  const name = 'Hari Dhakal';
  const phone = '123456789';

  return (
    <AppContext.Provider value={{ name, phone }}>
      {props.children}
    </AppContext.Provider>
  );
};

// 3. Export the provider
export default ContextProvider;



{/*
  
- Create context: export const AppContext = createContext()
- Create provider component and wrap children with `<AppContext.Provider value={...}>`
- Wrap your app or component tree with `<ContextProvider><App /></ContextProvider>`
- Consume context in child component with `const value = useContext(AppContext)`

  */}