import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password:string;
}

const initialState: SignupState = {
  firstName: '',
  lastName: '',
  email: '',
  password:''
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSignupDetails: (state, action: PayloadAction<SignupState>) => {
        console.log( state, action.payload );
        
      return { ...state, ...action.payload };
    },
  },
});

export const { setSignupDetails } = signupSlice.actions;

export default signupSlice.reducer;
