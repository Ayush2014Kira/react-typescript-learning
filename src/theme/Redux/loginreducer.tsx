import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  email: string;
  password:string;
}

const initialState: LoginState = {
  email: '',
  password:''
};

export const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setLoginDetails: (state, action: PayloadAction<LoginState>) => {
        console.log( state, action.payload );
        
      return { ...state, ...action.payload };
    },
  },
});

export const { setLoginDetails } = LoginSlice.actions;

export default LoginSlice.reducer;
