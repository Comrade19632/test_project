import axios from 'utils/axios'
import { toastOnError } from 'utils/Utils'

const axiosBaseQuery = () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError
      toastOnError(err)
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export default axiosBaseQuery