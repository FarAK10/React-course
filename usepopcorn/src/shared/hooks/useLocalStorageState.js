import { useState,useEffect } from "react";

export function useLocalStorageState(initialState,key){
    const [value, setValue] = useState(()=>{
        const stored =JSON.parse(localStorage.getItem(key));
        if(stored) return stored;
        return initialState
      });
      useEffect(function(){
        localStorage.setItem(key,JSON.stringify(value))
    
      },[value,key])

      return [value,setValue]
    
}