// import config from "../config";
// import axios from "axios";
// import Cookies from "universal-cookie";
// export const upload = (file) => {
//   const headers = { "Content-Type": "multipart/form-data" };

//   let formData = new FormData();
//   formData.append("file[]", file);

//   return axios
//     .post(config.host.upload + "/uploads", formData, {
//       headers,
//     })
//     .then((res) => res.data);
// };
// export const uploadCallback = (file) => {
//   return new Promise((resolve, reject) => {
//     let formData = new FormData();
//     formData.append("image", file);
//     axios
//       .post(
//         config.host.upload +
//           config.path.upload.upFile +
//           "?token=" +
//           new Cookies().get("user").token,
//         formData,
//         {
//           "Content-Type": "multipart/form-data",
//         }
//       )
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//         console.log("error upload ", err);
//       });
//   });
// };
