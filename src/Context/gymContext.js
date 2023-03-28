import { createContext, useEffect, useReducer,useState } from "react";

// GYM Context
export const gymContext = createContext()

const intialValue = []

const reducer = (state,action) =>{
     console.log(action.payload)
    switch(action.type){
            case "ADD_GYM":
                return action.payload
            case "SINGLE_GYM" :
                return action.payload
              
            default : return state
    }
}

export const GymContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, intialValue);
    
    useEffect(() => {
        console.log("user context", state);
      }, [state]);
    return (
        <gymContext.Provider value={[state, dispatch]}>
          {children}
        </gymContext.Provider>
      );
}

