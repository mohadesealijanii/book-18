"use client"

import { sumProducts } from "@/constants/functions"
import { createContext, useContext, useReducer, useState } from "react"
const cartContext = createContext()

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
}
const reducer = (state, action) => {
  console.log(state.selectedItems.id)
  console.log(state)

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 })
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      }

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      )
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      }



    case "INCREASE": {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumProducts(updatedItems),
      }
    }

    case "DECREASE": {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumProducts(updatedItems),
      }
    }

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      }

    default:
      throw new Error("نا معتبر")
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export const useCart = () => {
  const { state, dispatch } = useContext(cartContext)
  return [state, dispatch]
}
