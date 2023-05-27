import axios from "axios";
export default class apiServices {
  static getApiData() {
    return axios
      .get("http://localhost:5000/admin")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
