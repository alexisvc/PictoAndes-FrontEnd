import axios from "axios";
const baseUrl = "http://localhost:3001/api/pictograms";

let token = null;
const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

const getAllPictograms = () => {
    return axios.get(baseUrl).then((response) => response.data);
    };

const getPictogramsByUserId = (userId) => {
    const config = {
        headers: { Authorization: token },
    };
    return axios.get(`${baseUrl}/${userId}`, config).then((response) => response.data);
    };

const createPictogram = (newObject) => {
    const config = {
        headers: { Authorization: token },
    };
    return axios.post(baseUrl, newObject, config).then((response) => response.data);
    };

const updatePictogram = (id, newObject) => {
    const config = {
        headers: { Authorization: token },
    };
    return axios
    .put(`${baseUrl}/${id}`, newObject, config)
    .then((response) => response.data);
    };

const deletePictogram = (id) => {
    const config = {
        headers: { Authorization: token },
    };
    return axios.delete(`${baseUrl}/${id}`, config);
    }

export default { getAllPictograms, getPictogramsByUserId, createPictogram, updatePictogram, setToken, deletePictogram };