import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

interface UserType {
  name: string;
  lastName: string;
  phoneNumber: string;
  gas: any;
  balance: number,
  history: any,
  userType: 'Користувач' | 'Касир' | 'Адміністратор'
}

const initialState: UserType = {
  name: '',
  lastName: '',
  phoneNumber: '',
  balance: 1001,
  userType: 'Користувач',
  gas: [
    {
      type: '95',
      produser: 'Mustang',
      amount: 14
    }
  ],
  history: [

  ]
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addPhone: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    addName: (state, action: PayloadAction<any>) => {
        state.name = action.payload[0];
        state.lastName = action.payload[1];
        state.userType = action.payload[2];
    },
    buyGas: (state, action: PayloadAction<any>) => {
      let today = new Date()
      state.gas.push({
        type: action.payload[0],
        produser: action.payload[1],
        amount: action.payload[2],
      })
      state.balance = state.balance - Number(action.payload[2]) * Number(action.payload[3])
      state.history.push({
        date: today.toLocaleString(),
        typeOil: action.payload[0],
        produser: action.payload[1],
        amount: action.payload[2],
        price: (Number(action.payload[2]) * Number(action.payload[3])).toLocaleString(),
      })
    },
  },
});

export const {addPhone, addName, buyGas} = userSlice.actions;

export default userSlice.reducer;
