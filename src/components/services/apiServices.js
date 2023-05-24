import axios from "axios";

export default class apiServices {
  static async getApiData() {
    try {
      const response = await axios.get("http://localhost:5000/admin");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
