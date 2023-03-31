import axios from "axios";

const api = axios.create({
    baseURL: "https://newsapi.org/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'appliction.json'
    }
})

export const News = () => api.get("/v2/top-headlines?country=in&category=general&apiKey=17a32393eb7a401099dd2da16b84d5ff");
