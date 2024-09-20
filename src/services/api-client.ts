import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: "a03d843df32840aaa9fc2191c28ed9c7"
    }
})