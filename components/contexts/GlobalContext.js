import { createContext, useEffect, useState } from "react"
import { fetchByURL } from "../Helper"

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

  const initialState = {
    loading: true,
    trading: [],
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    const getData = async () => {
      const trading = await fetchByURL('trading')
      if (trading) {
        setState(prevState => ({
          ...prevState,
          trading: trading,
          loading: false
        }))
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
