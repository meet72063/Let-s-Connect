import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
  posts:'',
  isLoading:true,
  Nopost:false
}




  export const getPosts = createAsyncThunk('getPosts', async( _id,thunkAPI)=>{
        try {
          const resp = await axios.get(`http://localhost:4000/post/${_id}`,{withCredentials:true})
          return resp.data.posts
        } catch (error) {
          return thunkAPI.rejectWithValue('something went wrong')
        }
 })


const postSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers:(builder)=>{
      builder.addCase(getPosts.pending,(state)=>{
        state.isLoading = true
      })

      builder.addCase(getPosts.fulfilled,(state,action)=>{
        if(action.payload.length===0){
          state.Nopost =true
        }

        state.isLoading = false
        state.posts = action.payload
      })

      builder.addCase(getPosts.rejected,(state,action)=>{
        state.isLoading = 'NotResolve'
        state.posts = action.payload
      })
    }
   
   
    


})


export default postSlice.reducer


