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
      query: (clientId, extesionPhoneId) => `/client/${clientId}/extension/${extesionPhoneId}`,
      providesTags: (result, error, arg) => [{ type: 'ExtensionPhone', id: arg.id }],
    }),
    addNewExtensionPhone: builder.mutation({
      query: (initialExtensionPhone) => ({
        url: '/posts',
        method: 'POST',
        body: initialExtensionPhone,
      }),
      invalidatesTags: ['ExtensionPhone'],
    }),
    editExtensionPhone: builder.mutation({
      query: (clientId, extesionPhone) => ({
        url: `/client/${clientId}/extension/${extesionPhone.id}`,
        method: 'PATCH',
        body: extesionPhone,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'ExtensionPhone', id: arg.id }],
    }),
    deleteExtensionPhone: builder.mutation({
      query: (clientId, extesionPhoneId) => ({
        url: `/client/${clientId}/extension/${extesionPhoneId}`,
        method: 'DELETE',
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