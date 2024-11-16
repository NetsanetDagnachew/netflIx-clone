import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
             
});

export default instance;

// const instance = axios.create({
//     method: 'get',
//     headers: { 'Content-Type': 'application/json'},
//     baseURL: "https://api.themoviedb.org/3",
//     data:
                 
// })
// .then(function (response) {
//     console.log(response);
//   });

// export default instance;
