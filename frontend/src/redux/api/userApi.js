import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

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
                
            })
        })
     })
});


export const {useRegisterUserMutation , useLoginMutation} =userApi;