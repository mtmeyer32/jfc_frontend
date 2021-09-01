import axios from "../axios/axios";
//import axios from 'axios';

const _addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const addItem = (
  itemData = {
    title: "",
    description: "",
    price: 0,
    thumb: "",
    photos: "",
  }
) => {
  return (dispatch) => {
    const item = {
      title: itemData.title,
      description: itemData.description,
      price: itemData.price,
      thumb: itemData.thumb,
      photos: itemData.photos,
    };

    return axios.post("items/create", item).then((result) => {
      dispatch(_addItem(result.data));
    });
  };
};

const _getItems = (items) => ({
  type: "GET_ITEMs",
  items,
});

export const getItems = () => {
  return async (dispatch) => {
    const response = await axios.get("/inventory").catch((error) => console.log(error));
    console.log("after await");
    console.log(response.data);
    dispatch(_getItems(response.data));
  };
};

// export const getItems = () => {
//     return (dispatch) => {
//         console.log("getItems ran");
//         return axios.get('/inventory').then(result => {
//             const items = [];
 
//             result.data.forEach(item => {
//                 items.push(item);
//             });
//             console.log(items);
//             dispatch(_getItems(items));
//         }).catch(error => console.log(error));
//     };
// };
