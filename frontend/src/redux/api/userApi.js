import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"
import { setAuth, setUser } from "../features/userSlice";

export const userApi =createApi({
     reducerPath: 'userApi',
     baseQuery :fetchBaseQuery({baseUrl : '/api/v1' , credentials:"include"}),
     endpoints :(builder)=>({ 
        registerUser : builder.mutation({
            query:(data)=>({
                url :'/register',
                method :'POST',
                body :data 
            })
        }),
        login :builder.mutation({
            query :(data)=>({
                   url:  '/login',
                   method:"POST",
                   body:data
                
            }),
            transformResponse:(result)=>result.user,
            async onQueryStarted(args, { dispatch ,queryFulfilled}) {
               
                  try {

                    const {data} = await queryFulfilled;
                    dispatch(setUser(data));
                    dispatch(setAuth(true));
                    console.log(data);
                    
                  } catch (error) {
                    console.log(error);
                  }
                 
              }
        })
     })
});


export const {useRegisterUserMutation , useLoginMutation} =userApi;