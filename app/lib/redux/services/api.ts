import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dwsApi = createApi({
    reducerPath: 'dwsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers) => {
            headers.set('X-Api-Key', 'B4D123E3-5AD9-4584-8578-384B6F9A5688');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAvailability: builder.query<any, { arrival: string; departure: string }>({
            query: ({ arrival, departure }) => `api/Availability/${arrival}/${departure}`,
        }),
        getCategoryAvailability: builder.query<any, { category: string; arrival: string; departure: string }>({
            query: ({ category, arrival, departure }) => `api/Availability/${category.toUpperCase()}/${arrival}/${departure}`,
        }),
        createReservation: builder.mutation<any, any>({
            query: (bookingData) => ({
                url: 'api/Reservation',
                method: 'POST',
                body: bookingData,
            }),
        }),
    }),
});

export const { useGetAvailabilityQuery, useGetCategoryAvailabilityQuery, useCreateReservationMutation } = dwsApi;
