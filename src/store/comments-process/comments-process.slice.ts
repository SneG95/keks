import { NameSpace, RequestStatus } from '../../consts';
import { fetchCommentsAction, postCommentAction, fetchLastCommentAction } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { TCommentsProcess } from '../../types/state';

const initialState: TCommentsProcess = {
  comments: [],
  lastComment: null,
  sendingCommentStatus: RequestStatus.Unsent,
  hasErrorLastComment: false
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    dropSendingStatus: (state) => {
      state.sendingCommentStatus = RequestStatus.Unsent;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchLastCommentAction.fulfilled, (state, action) => {
        state.lastComment = action.payload;
        state.hasErrorLastComment = false;
      })
      .addCase(fetchLastCommentAction.rejected, (state) => {
        state.hasErrorLastComment = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.sendingCommentStatus = RequestStatus.Pending;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.sendingCommentStatus = RequestStatus.Success;
        state.comments.push(action.payload);
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.sendingCommentStatus = RequestStatus.Error;
      });
  },
});

export const {dropSendingStatus} = commentsProcess.actions;
