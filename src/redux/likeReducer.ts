import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

type LikeProductsType = {
    [id: number]: boolean
    likesCount: number
}

export const initialState: LikeProductsType = {
    likesCount: 0,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
      addLike: (state, action) => {
        state[action.payload] = true;
        state.likesCount += 1;
      },
      removeLike: (state, action) => {
        state[action.payload] = false;
        state.likesCount -= 1;
      },
    },
  })

export const { addLike, removeLike } = likeSlice.actions

export const selectLikesCount = (state: RootState) => state.productsLikeState.likesCount

export default likeSlice.reducer