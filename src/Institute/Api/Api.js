import axios from "axios";

axios.interceptors.request.use((config) => {
  const token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImIyNjlkN2QxLTUyN2YtNGExYi1hM2I0LTE3MWFiZGRhMWE0ZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiAjMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNyZWVqaXRoLmF0QGNvZGluZ2hhbmRzLmluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2NjgwNzY5NTQsImlzcyI6Ik5lcmd5SW5kaWEzNjAiLCJhdWQiOiJodHRwczovL2Fzc2Vzc21lbnQubmVyZ3kzNjAuY29tLyJ9.fWXH-uCs1ffLEvLM9DL4qo4BOG2SdzV5roktYIvjuUo'
  config.headers["Authorization"] = "Bearer " + token;

  return config;
});
const baseURL = "https://n360-dev.azurewebsites.net/api/";
export const getInstitutes = async () => {
  const res = await axios.get(`${baseURL}Institutes`);
  return res.data;
};

export const createInstitutes = async (batch) => {
  const res = await axios.post(`${baseURL}Institutes`, batch);
  return res.data;
};

export const deteleInstitutes = async (batchId) => {
  console.log("batchId", batchId);
  const res = await axios.delete(`${baseURL}/Institutes/${batchId}`);
  return res.data;
};

// export const updateInstitutes = async (batch) => {
//   const res = await axios.put("/Institutes", batch);
//   return res.data;
// };

// export const getInstituteById = async (id) => {
//   const res = await axios.get(`/Institutes/${id}`);
//   return res.data;
// };
