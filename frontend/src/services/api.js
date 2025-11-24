import axios from 'axios';

const API_BASE = 'http://localhost:5000'; 

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (data) => {
  const res = await api.post('/api/auth/login', data);
  return res.data;
};

export const registerOrg = async (data) => {
  const res = await api.post('/api/auth/register', data);
  return res.data;
};

export const getEmployees = async () => {
  const res = await api.get('/api/employees');
  return res.data;
};

export const addEmployee = async (data) => {
  const res = await api.post('/api/employees', data);
  return res.data;
};

export const getTeams = async () => {
  const res = await api.get('/api/teams');
  return res.data;
};

export const addTeam = async (data) => {
  const res = await api.post('/api/teams', data);
  return res.data;
};

export default api;
