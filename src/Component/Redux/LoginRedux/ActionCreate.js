
import { GETDATASUCESS, GETALBUM} from "./ActionType";
import { DELETEDATASUCESS } from "./ActionType";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



// Action for Post data

export const GetDataSucess = () => {
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setTemp(response.data);
      console.log(response.data);
    });
  }, []);
  return {
    type: GETDATASUCESS,
    payload: temp,
  };
};

export const DeleteDataSucess = (id) => {
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts${id}`)
      .then((response) => {
        setTemp(response.data);
      });
  }, []);
  return {
    type: DELETEDATASUCESS,
    id,
  };
};

// Action for Album data

export const GetAlbum = () => {
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setTemp(response.data);

        console.log(response.data);
      });
  }, []);
  return {
    type: GETALBUM,
    payload: temp,
  };
};


    


