import React, { useState, useEffect} from 'react'
import "../style/main.scss"
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1
  };

  
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "v1/search/shop.json";
    const ClientID = "209x5JDS1o_m4h_qQbeV";
    const ClientSecret = "UcXSPlUEtu";

    await axios.get(URL, {
      params: {
        query: "침구류",
        display: 5,
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

  const background = data.map((item, i) => (
    <div className="image" key={i}>
      <img width="600"  style={{margin :" auto"}} src={item.image} alt="가구" />
    </div>
  ) )
  

  return (
    <div className="Carousel">
      <Slider {...settings}>
          {background}
      </Slider>  
    </div>
  )
}
