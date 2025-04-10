import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const res = await axios.get("https://fakestoreapi.com/users");
  return res.data;
});

export const fetchUserById = createAsyncThunk("users/fetchById", async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/users/${id}`);
  return res.data;
});
