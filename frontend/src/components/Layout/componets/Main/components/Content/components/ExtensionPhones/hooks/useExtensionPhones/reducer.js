import { get } from 'lodash'

import { getSuccessType, getFailType } from 'common/api'
import { ACTION_TYPES } from './actions'

export const initialState = {
  isLoading: false,
  extensionPhones: [],
  error: '',
}

export default (state, action) => {
  switch (action.type) {
  case ACTION_TYPES.GET_EXTENSION_PHONES_DATA:
    return {
      ...state,
      isLoading: true,
    }
  case getSuccessType(ACTION_TYPES.GET_EXTENSION_PHONES_DATA):
    return {
      ...state,
      isLoading: false,
      extensionPhones: get(action, ['payload']),
    }
  case getFailType(ACTION_TYPES.GET_EXTENSION_PHONES_DATA):
    return {
      ...state,
      isLoading: false,
      error: 'Не удалось загрузить статитику для карточек',
    }
  default:
    return state
  }
}
