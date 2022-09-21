import { getSuccessType, getFailType } from 'common/api'
import axios from 'utils/axios'

export const ACTION_TYPES = {
  GET_EXTENSION_PHONES_DATA: 'GET_EXTENSION_PHONES_DATA',
}

export const getExtensionPhonesData = async (
  dispatch, clientId
) => {
  dispatch({
    type: ACTION_TYPES.GET_EXTENSION_PHONES_DATA,
  })

  const response = await axios.get(`client/${clientId}/extension/`)

  if (response.status === 200) {
    dispatch({
      type: getSuccessType(ACTION_TYPES.GET_EXTENSION_PHONES_DATA),
      payload: response.data,
    })
  } else {
    dispatch({
      type: getFailType(ACTION_TYPES.GET_EXTENSION_PHONES_DATA),
    })
  }
}
