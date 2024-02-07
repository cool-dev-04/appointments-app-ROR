import axios from 'axios';

const API_URL = '/users';

const storeData = (res) => {
  localStorage.setItem('user', JSON.stringify(res.data));
  localStorage.setItem('token', JSON.stringify(res.headers.authorization));
};

const register = async (userData) => {
  const response = await axios.post(`${API_URL}`, userData);

  if (response.data) {
    storeData(response);
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/sign_in`, userData);

  if (response.data) {
    storeData(response);
  }

  return response.data;
};

const authServices = {
  register,
  login,
};

export default authServices;
