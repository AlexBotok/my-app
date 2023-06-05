import axios from "axios";
export class apiServices {
  static getApiData() {
    return axios
      .get("https://furniturebackendapp.herokuapp.com/", {
        credentials: "include",
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

// export class apiLogin {
//   static getApiData() {
//     return axios
//       .post("http://localhost:5000/login")
//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }
