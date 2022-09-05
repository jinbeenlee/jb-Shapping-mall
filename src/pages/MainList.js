import React from "react";
import axios from "axios";
import { useState, useEffect } from "react"; 

function MainList() {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "https://openapi.naver.com/v1/search/shop.json";
    const ClientID = "209x5JDS1o_m4h_qQbeV";
    const ClientSecret = "UcXSPlUEtu";

    console.log(data);
    await axios
      .get("/v1/search / shop.json", {
        params: {
          query: "모자",
          display: 20,
        },
        headers: {
          "X-Naver-Client-Id": ClientID,
          "X-Naver-Client-Secret": ClientSecret,
        },
      })
      .then((res) => setData(res.data.items))
      .catch((e) => { });
  };

  useEffect(() => {
    shoppingData();
  }, []);

  return <></>;
}

export default MainList;