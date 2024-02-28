import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstProject from "../../assets/FirstProject.png";
import secondProject from "../../assets/SecondProject.png";
import thirdProject from "../../assets/ThirdProject.png";
import { Grid } from "@mui/material";

const SlickSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const data = [
    {
      img: firstProject,
    },
    {
      img: secondProject,
    },
    {
      img: thirdProject,
    },
    {
      img: firstProject,
    },
    {
      img: secondProject,
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{ flexDirection: "row-reverse", alignItems: "center" }}
        spacing={1}
      >
        <Grid item xs={9} className="slickSliderMain">
          <Slider
            asNavFor={nav2}
            ref={(slider1: any) => setNav1(slider1)}
            arrows={false}
            adaptiveHeight={false}
            vertical={true}
          >
            {data.map((item: any, index: number) => (
              <div key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={3} className="slickSliderMain">
          <Slider
            asNavFor={nav1}
            ref={(slider2: any) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            arrows={false}
            adaptiveHeight={false}
          >
            {data.map((item: any, index: number) => (
              <div key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </>
  );
};

export default SlickSlider;
