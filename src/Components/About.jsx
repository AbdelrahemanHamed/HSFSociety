import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion"; // استيراد framer-motion
import About_img from "../assets/aboutus_img.png";
import bg1 from "../assets/bg1.png";

function About() {
  return (
    <Box sx={{ position: "relative",overflow:{xs:'hidden',md:'visible'},pb:{xs:'30px',md:'0'} }}>
      {/* الحاوية الخارجية */}
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            px: "10px",
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* النصوص */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              sx={{
                fontSize: { xs: "40px", md: "70px", xl: "100px" },
                fontWeight: "400",
                lineHeight: "1.1",
                fontFamily: "Bebas Neue",
              }}
            >
              Smart Business <br /> with Smart People
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              sx={{
                fontSize: { xs: "16px", md: "20px", lg: "24px" },
                lineHeight: "1.5",
                fontFamily: "Poppins",
                mt: 2,
              }}
            >
              Grow your business to the next level <br /> to improve your
              business performance to <br /> stay competitive
            </Typography>

            {/* إحصائيات */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              sx={{
                display: "flex",
                gap: "20px",
                textAlign: "center",
                flexWrap: "wrap",
                mt: 3,
              }}
            >
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Cases Solved", value: "891" },
                { label: "Business Partners", value: "263" },
              ].map((item) => (
                <Box key={item.label} sx={{ minWidth: "100px" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "36px", md: "48px" },
                      lineHeight: "1.2",
                      fontFamily: "Bebas Neue",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "18px" },
                      lineHeight: "1.5",
                      color: "#BFA0A0",
                      fontFamily: "Poppins",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* الصورة */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            sx={{
              width: { xs: "100%", md: "45%", lg: "40%" },
              height: "auto",
              position: "relative",
              zIndex: "10",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src={About_img}
              sx={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>

      {/* الخلفية الدوارة */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        sx={{
          width: "2000px",
          height: "2200px",
          position: "absolute",
          top: "-950px",
          right: "-400px",
          transform: "rotate(45deg)",
        }}
      >
        <Box
          component="img"
          src={bg1}
          sx={{
            width: "100%",
            height: "100%",
            transform: "rotate(45deg)",
          }}
        />
      </Box>
    </Box>
  );
}

export default About;
