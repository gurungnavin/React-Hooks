import React from 'react'
import StateExample from './hooks/01-useState/StateExample'
import UseEffectExample from './hooks/02-useEffect/UseEffectExample'
import UseStateOject from './hooks/01-useState/useStateOject'
import UseEffectExample01 from './hooks/02-useEffect/UseEffectExample01'
import UseRefExample from './hooks/03-useRef/UseRefExample'
import UseRefDomExample from './hooks/03-useRef/UseRefDomExample'
import UseMemo from './hooks/04-useMemo/UseMemo'
import UseCallback from './hooks/05-useCallback/UseCallback'
import Profile from './components/Profile'
import UseReducer from './hooks/07-useReducer/UseReducer'
import UseLayoutEffect from './hooks/08-useLayoutEffect/UseLayoutEffect'

const App = () => {
  return (
    <div className='flex items-center justify-center bg-orange-300 h-lvh w-full font-semibold text-2xl'>
     { /* <StateExample /> */}    
     {/* <UseStateOject /> */}
     {/* <UseEffectExample /> */}
     {/* <UseEffectExample01 /> */}
     {/* <UseRefExample /> */}
     {/* <UseRefDomExample /> */}
     {/* <UseMemo /> */}
     {/* <UseCallback /> */}
     {/* <Profile /> */}
     {/* <UseReducer /> */}
     <UseLayoutEffect />
    </div>
  )
}

export default App