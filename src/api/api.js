import axios from "axios";

// const instanceBeer = axios.create({
//   baseURL:
//     "https://d.beerinsiders.ru:5443/orders/client/analytics?id=62cad21f5443160f6327f58a"
// });

export const getData = async () => {
    const { data } = await axios.get(
      "https://d.beerinsiders.ru:5443/orders/client/analytics?id=62cad21f5443160f6327f58a",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY5NzQxOTE3M2ExNTkxMWIzNDlhNyIsImlubiI6IiIsImlhdCI6MTY4MjM2MzAwMywiZXhwIjoxNjgyOTY3ODAzfQ.AO0dhrMubtCHsq8p9KDn2wOZWx0AWTywsgi15sQNdQU",
          "Content-Type": "application/json",
        },
      }
    );
    return data
};
// instanceBeer.interceptors.request.use((config) => {
//   config.headers = {
//     'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY5NzQxOTE3M2ExNTkxMWIzNDlhNyIsImlubiI6IiIsImlhdCI6MTY4MjM2MzAwMywiZXhwIjoxNjgyOTY3ODAzfQ.AO0dhrMubtCHsq8p9KDn2wOZWx0AWTywsgi15sQNdQU",
//     "Content-Type": "application/json",
//   };
// });
