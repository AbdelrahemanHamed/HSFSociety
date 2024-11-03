import { Box, Typography } from "@mui/material";
import vector from "../assets/vector.png";
import plastine_flag from "../assets/plastine_flag.png";
import verctor2 from "../assets/vector2.png";
import vector1 from "../assets/bg1.png";
function OurFocus() {
  return (
    <Box sx={{ position: "relative" ,overflow:{xs:'hidden',md:'visible'}}}>
      <Box className="container" sx={{ position: "relative", zIndex: "12" }}>
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
          }}
        >
          OUR FOCUS
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: {xs:"15px",md:"10px"},
            mt: "30px",
          }}
        >
          <Box
            sx={{
              width: {xs:"100%",md:"15%"},
              textAlign: "center",
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
            }}
          >
            <Box sx={{ width: "173px", height: "173px" }}
         
            >
             
              <Box
                component="img"
                src={vector}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "75px",
                fontFamily: "Tanseek Modern Pro Arabic",
                lineHeight: "105.6px",
              }}
            >
              S
              <br />
              O
              <br />
              C
              <br />
              I
              <br />
              E
              <br />
              T
              <br />
            </Typography>
          </Box>

          <Box
            sx={{ width: {xs:'100%',md:"307.48px"}, height: {xs:'100%',md:"293.96px"}, alignSelf: "center" }}
          >
            <Box
              component="img"
              src={plastine_flag}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              pt: "120px",
            }}
          >
            <Box
                 className="card"
              sx={{
                width: "371px",
                height: "424px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}
               
              >
                
                <Typography
                  className="text-gradient"
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
            <Box
               className="card"
              sx={{
                width: "371px",
                height: "424px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}>
                <Typography
                  className="text-gradient"
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Box
               className="card"
              sx={{
                width: "371px",
                height: "424px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}
               
              >
                
                <Typography
                  className="text-gradient"
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
            <Box
               className="card"
              sx={{
                width: "371px",
                height: "424px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}>
                <Typography
                className="text-gradient"
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1145px",
          height: "1725px",
          position: "absolute",
          top: "500px",
       
        }}
      >
        <Box
          component="img"
          src={verctor2}
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "1887px",
          height: "1700px",
          position: "absolute",
          top: "-300px",
          right: "-200px",
          transform: "rotate(43.48 deg)",
        }}
      >
        <Box
          component="img"
          src={vector1}
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default OurFocus;
