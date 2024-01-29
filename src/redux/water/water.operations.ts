import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWaterData } from "../../components/WaterList/WaterList";
import { IWaterPortion } from "../../components/WaterList/AddWaterModal/AddWaterModal";

export const addWater = createAsyncThunk(
  "water/addWater",
  async (waterVolume: IWaterPortion, thunkAPI) => {
    try {
      const response = await axios.post("/api/water/add", waterVolume);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAmountDaily = createAsyncThunk(
  "water/getAmountDaily",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/water/amountdaily");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAmountMonthly = createAsyncThunk(
  "water/getAmountMonthly",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/water/amoutmonth");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWaterVolume = createAsyncThunk(
  "water/updateWaterVolume",
  async (waterData: IWaterData, thunkAPI) => {
    try {
      const response = await axios.post(`/api/water/update`, waterData);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  "water/deleteWater",
  async (waterID: number, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/water/delete/${waterID}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);
