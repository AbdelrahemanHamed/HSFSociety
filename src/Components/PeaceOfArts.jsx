import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



import img1 from "../assets/peace_of_art_imgs/img1.png";
import img2 from "../assets/peace_of_art_imgs/img2.png";
import img3 from "../assets/peace_of_art_imgs/img3.png";
import img4 from "../assets/peace_of_art_imgs/img4.png";
import img5 from "../assets/peace_of_art_imgs/img5.png";
import img6 from "../assets/peace_of_art_imgs/img6.png";
import img7 from "../assets/peace_of_art_imgs/img7.png";
import img8 from "../assets/peace_of_art_imgs/img8.png";
import img9 from "../assets/peace_of_art_imgs/img9.png";
import img10 from "../assets/peace_of_art_imgs/img10.png";

function PeaceOfArts() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <Box sx={{ overflow: { xs: "hidden", md: "visible" } }}>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
            mb: "30px",
          }}
        >
          PEACE OF ART
        </Typography>

        <Swiper
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
          style={{
            width: "100%",
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={img}
                sx={{
                  width: { xs: "100%", md: "auto" },
                  maxWidth: "100%",
                  height: { xs: "auto", md: "253px" },
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default PeaceOfArts;
