import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CONTENTFUL_BASE_URL, CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from 'configs/enviroment.config'


export const generalApi = createApi({
    reducerPath: 'generalApi',
    baseQuery: fetchBaseQuery({
        //baseUrl: `${CONTENTFUL_BASE_URL}spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}/`, prepareHeaders: (headers, { getState }) => {
        baseUrl: `https://cdn.contentful.com/spaces/x5l9h7fbz6ms/environments/master/entries`,
        
    }),

    endpoints: (builder) => ({
        getGeneralInfo: builder.query({
            query: (content_type) => `?access_token=5j2MQhRQwPFDGr03KYi28yB9u0MxBcJObfd9ttEjZJE&content_type=${content_type}`,
            //query: (content_type) => `&content_type=skills`,
            //query: ({ content_type}) => ({content_type}),

        }),
    }),
})

export const {
    useGetGeneralInfoQuery,
} = generalApi