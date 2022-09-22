import { useCallback, useReducer } from 'react'

import { getExtensionPhonesData as getExtensionPhonesDataAction } from './actions'
import reducer, { initialState } from './reducer'

const useExtensionPhones = () => {
  const [{
    isLoading,
    extensionPhones,
    error,
  }, localDispatch] = useReducer(reducer, initialState)

  const getExtensionPhonesData = useCallback((clientId) => {
    getExtensionPhonesDataAction(localDispatch, clientId)
  }, [localDispatch])

  return {
    getExtensionPhonesData,
    extensionPhones,
    error,
    isLoading,
  }
}

export default useExtensionPhones
