import React from "react";
import axios from "axios";
import { useState, useEffect } from "react"; 
import "../style/main.scss"
import "../style/reset.css"

function MainList() {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "v1/search/shop.json";
    const ClientID = "209x5JDS1o_m4h_qQbeV";
    const ClientSecret = "UcXSPlUEtu";

    await axios.get(URL, {
        params: {
          query: "램프",
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
  console.log(data);
  return <>
    <div className="uk-child-width-1-2@m cardWarpper" uk-grid>
      {data.map((item, i) => (
        <div key={i} className="card">
          <div className="content">
            <div className="uk-card-media-top">
              <img src={item.image} width="280" alt="코트"/>
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{item.brand}</h3>
              <h4>{item.title}</h4>
              <h4>{item.lprice}원</h4>
            </div>
          </div>
        </div>
      ))
      }
    
</div>

  
        </>;
}

export default MainList;