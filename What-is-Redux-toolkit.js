/* Redux-  Redux is javaScripts library for managing centralizing application state
        .it is most commonly used with libraries such ass React CLIENT-SIDE APPLICATION
         Interface.
         
         Redux vs Context-api - 
           
           For high friquency cahnge State We can use Redux
           Low Friquency change state i can use CONTEXT-API
           
           
           1. install Package 
           yarn add 
           @reduxjs/toolkit
           react-redux
           
           2. create Redux store 
              src/store
              src/store/index.js
              
              in index folder import configureStore API form Redux tookits.
              
              ex.              
             import {configureStore} from '@reduxjs/toolkit';
             const store = configureStore({
             reducer:{
             
                   },
             
             })
             export default store;
             
            
           3.  tell react i am going to use Redux Store 
             via <Provider> around our application 
             src/index.js 
             -import Redux store we just created , put a 
             a <Provider> around your <App> 
             
           4 . Make a Redux State Slice 
           5. Use  Action Creators 
                 
             
           /*


         
