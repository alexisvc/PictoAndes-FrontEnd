import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

const registerUser = (user) => {
    return axios.post(baseUrl, user).then((response) => response.data);
    };

export default { registerUser };
