import axios from "axios";

const instance = axios.create({
  baseURL: "https://mernwhatsappclone.herokuapp.com",
});

export default instance;
