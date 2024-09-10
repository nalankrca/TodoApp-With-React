import React, { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext(); // Yeni bir context oluşturuldu

export const TodoLayer = ({ initialState, reducer, children }) => { // Provider oluşturuyoruz
 // const contextValue = ;
  
  return (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TodoLayerContext.Provider>
  );
};

export const useTodoLayerValue = () => useContext(TodoLayerContext); //her uygulamada useContext demek yerine bu sayfada 1 kere tanımlıyoruz.
