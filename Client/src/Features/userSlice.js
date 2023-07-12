import {createSlice} from '@reduxjs/toolkit'




const initialState = {
    profileData:'hello'
}



const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        getProfileData:(state,{payload})=>{
          state.profileData = payload
        },
       
    }

}
    
) 


export const{ getProfileData} = userSlice.actions
export default userSlice.reducer