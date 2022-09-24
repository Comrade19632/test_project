import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './baseQuery'

export const extensionPhonesSlice = createApi({
  reducerPath: 'postApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['ExtensionPhone'],
  endpoints: (builder) => ({
    getExtensionPhones: builder.query({
      query: (clientId) => ({
        url: `/client/${clientId}/extension/`,
      }),
      providesTags: (result = []) => [
        'ExtensionPhone',
        ...result.map(({ id }) => ({ type: 'ExtensionPhone', id })),
      ],
    }),
    getExtensionPhone: builder.query({
      query: ({clientId, extensionPhoneId}) => ({
        url:  `/client/${clientId}/extension/${extensionPhoneId}`,
      }),
      providesTags: (result, error, arg) => [{ type: 'ExtensionPhone', id: arg.id }],
    }),
    addNewExtensionPhone: builder.mutation({
      query: ({clientId, formData}) => ({
        url: `/client/${clientId}/extension/`,
        method: 'POST',
        data: formData,
      }),
      invalidatesTags: ['ExtensionPhone'],
    }),
    deleteExtensionPhone: builder.mutation({
      query: ({clientId, extensionPhoneId}) => ({
        url: `/client/${clientId}/extension/${extensionPhoneId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ExtensionPhone'],
    }),
    editExtensionPhone: builder.mutation({
      query: ({clientId, extensionPhoneId, formData}) => ({
        url: `/client/${clientId}/extension/${extensionPhoneId}`,
        method: 'PUT',
        data: formData,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'ExtensionPhone', id: arg.id }],
    }),
  }),
})

export const {
  useGetExtensionPhonesQuery,
  useGetExtensionPhoneQuery,
  useAddNewExtensionPhoneMutation,
  useEditExtensionPhoneMutation,
  useDeleteExtensionPhoneMutation,
} = extensionPhonesSlice