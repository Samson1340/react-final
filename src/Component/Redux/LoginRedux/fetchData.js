// import axios from "axios";
// import { getDataReq, getDataSucess, getDataError } from "./ActionCreate";


// export const fetchProducts = () => {
  
//   return function (dispatch){ 
//     dispatch(getDataReq());
//     axios
//       .get(
//         "https://jsonplaceholder.typicode.com/posts"
//       )
//       .then(response => {
//         dispatch(getDataSucess(response.data));
//         console.log(response.data)
//       })
//       .catch(error => {
//         dispatch(getDataError(error));
//       });
//   };
// }