// import { useContext } from "react"

import { createContext } from "react"

// const ShoppingCartContext = useContext({})

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext)
// }

// export const ShoppingCartProvider = ({children}) => {
//   return (
//     <ShoppingCartContext.Provider value={{}} >
//       {children}
//     </ShoppingCartContext.Provider>
//   )
// }

const initialValue = {
  data: [],
}

export const Context = createContext()

const Provider = ({children}) => {
  return <Context.Provider> {children} </Context.Provider>
}

export default Provider
