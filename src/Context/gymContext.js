import { createContext, useEffect, useReducer,useState } from "react";


export const gymContext = createContext()

const intialValue = []

const reducer = (state,action) =>{
     console.log(action.type)
    switch(action.type){
            case "ADD_COSTUMER":
                return [...state,action.payload]

            case "DELETE_CUSTOMER" :
                return state.filter((customer)=> customer.customer_id !== action.payload)
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

