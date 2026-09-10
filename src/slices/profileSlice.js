import {createSlice} from "@reduxjs/toolkit"

const getSafeUser = () => {
  try {
    const item = localStorage.getItem("user");
    if (!item || item === "undefined") return null;
    try {
      return JSON.parse(item);
    } catch {
      return null;
    }
  } catch {
    return null;
  }
};

const initialState = {
  user: getSafeUser(),
  loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setUser,setLoading} = profileSlice.actions;
export default profileSlice.reducer;