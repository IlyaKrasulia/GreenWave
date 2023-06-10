import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

interface BanersType {   
    baners: any
}

const initialState: BanersType = {
 baners: []
};

export const userSlice = createSlice({
  name: 'baners',
  initialState,
  reducers: {
    updateBaners: (state, action: PayloadAction<string>) => {
      state.baners = action.payload;
    },

  },
});

export const {updateBaners} = userSlice.actions;

export default userSlice.reducer;
