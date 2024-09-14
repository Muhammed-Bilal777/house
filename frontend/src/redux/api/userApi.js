import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { setAuth, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1", credentials: "include" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (result) => result.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setAuth(true));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getMe: builder.query({
      query: (id) => `/me`,
    }),
    transformResponse: (result) => result.user,
    async onQueryStarted(args, { dispatch, queryFulfilled }) {
      const data = await queryFulfilled;
      dispatch(setUser(data));
      dispatch(setAuth(true));
    },
    sendDetails: builder.mutation({
      query: (body) => ({
        url: "/details",
        method: "POST",
        body,
      }),
    }),
    updateAvatar: builder.mutation({
      query: (body) => ({
        url: `/upload`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useGetMeQuery,
  useSendDetailsMutation,
  useUpdateAvatarMutation,
} = userApi;
