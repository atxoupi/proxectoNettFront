import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/events', {
        headers: {
          'Accept': 'application/vnd.api+json',
        },
      }); 
      return response.data; 
    } catch (error) {
      throw error;
    }
  });

const eventsSlice = createSlice({
    name: 'events',
    initialState :{
        events: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchEvents.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchEvents.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.events = action.payload;
          })
          .addCase(fetchEvents.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });

export default eventsSlice.reducer;