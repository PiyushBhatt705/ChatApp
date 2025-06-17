import  axios  from "axios";

export  const axiosInstance =axios.create({
     baseURL: isDev ? "http://localhost:5001/api" : "https://chatapp-production-b41a.up.railway.app/api",
    withCredentials: true,
})