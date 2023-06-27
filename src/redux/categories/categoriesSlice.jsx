import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  categories : [],
  status:"underConstruction"
}

const categoriesSlice = createSlice({
  name:"bookCategory",
  initialState,
  reducers :{
  categoryStatus : (state) =>{
      state.status ="underConstruction"
    }
  }
})

export const {categoryStatus} = categoriesSlice.actions
export default categoriesSlice.reducer