/* eslint-disable no-irregular-whitespace */
import { Box, Typography } from "@mui/material";
import copy_icon from "../../assets/pages_assets/copy_icon.png";
import vector1 from "../../assets/pages_assets/vector1.png";
import { useContext, useState } from "react";
import x_mark_icon from "../../assets/x_mark_icon.png";
import check_icon from "../../assets/check_icon.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import arrow from "../../assets/pages_assets/arrow.png"

function Dashboard() {
  let [rows] = useState([
    { name: "ROYAL CROWN DIAMOND", right: "0" },
    { name: "CROWN DIAMOND", right: "0" },
    { name: "BLACK DIAMOND", right: "0" },
    { name: "EXACTIVE", right: "0" },
    { name: "BLUE DIAMOND", right: "0" },
    { name: "DIAMOND", right: "0" },
    { name: "EMERALD", right: "0" },
    { name: "RUBY", right: "0" },
    { name: "SAPPHIRE", right: "0" },
    { name: "JADE", right: "3" },
  ]);

  let navigate = useNavigate();

  let {sidebarOpen}=useContext(Context)
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: sidebarOpen ? { xs: "center", md: "start" } : "center",
        gap: "50px",
        transition:'400ms all '
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Box
          sx={{
            width: sidebarOpen? { xs: "100%", md: "600px" }:{xs:'100%',md:'800px'},
            height: "288px",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(280.13deg, #DC4B9A 40.3%, #51D5F5 59.7%)",
              height: "71px",
              borderRadius: "15px 15px 0 0",
              display: "flex",
              justifyContent: "space-between",
              px: "30px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "19px" }}>LEFT</Typography>
            <Typography sx={{ fontSize: "19px" }}>Network status</Typography>
            <Typography sx={{ fontSize: "19px" }}>RIGHT </Typography>
          </Box>

          <Box
            sx={{
              height: "auto",
              px: "30px",
              py: "50px",
              backgroundColor: "#091B29",
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
              borderRadius: "0 0  15px 15px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography>489,000</Typography>
              <Typography>0</Typography>
              <Typography>677</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography>Rank volume</Typography>
              <Typography>Total Network volume</Typography>
              <Typography>Total downline</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography>1,755,100</Typography>
              <Typography>1,281,200</Typography>
              <Typography>4,265</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "auto",
            height: "533px",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(280.13deg, #DC4B9A 40.3%, #51D5F5 59.7%)",
              height: "71px",
              borderRadius: "15px 15px 0 0",
              display: "flex",
              justifyContent: "space-between",
              px: "30px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "19px" }}>LEFT</Typography>
            <Typography sx={{ fontSize: "19px" }}>Network status</Typography>
            <Typography sx={{ fontSize: "19px" }}>RIGHT </Typography>
          </Box>
          <Box
            sx={{
              height: "auto",
              borderRadius: "0 0 15px 15px",
              backgroundColor: "#091B29",
              textAlign: "center",
              pb: "50px",
            }}
          >
            {/* 1 row */}

            {rows.map((row, index) => {
              const isLastRow = index === rows.length - 1;
              return (
                <Box key={index} sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "space-between",
                      width: "88%",
                      mx: "auto",
                      p: "10px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>0</Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {row.name}
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      {row.right}
                    </Typography>
                  </Box>
                  {!isLastRow && (
                    <Box sx={{ border: "0.5px solid #FFFFFF" }}></Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{}}>
          <Box
            sx={{
              width: "355px",
              height: "133px",
              background:
                "linear-gradient(116.25deg, #51D5F5 13.83%, #762853 33.13%, #02070B 86.17%)",
              borderRadius: "15px",
              p: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
         

            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Referral link</Typography>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "auto",
                    height: "38px",
                    bordderRadius: "5px",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    justifyContent: "sstart",
                    alignItems: "center",
                    px: "10px",
                  }}
                >
                  <Typography sx={{ color: "#000" }}>
                    https://www.google.com/s.....
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "18px", height: "18px" }}>
                    <Box
                      component="img"
                      src={copy_icon}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "355px",
            height: "163px",
            backgroundColor: "#061622",
            mt: "170px",
            borderRadius: "15px",
            p: "15px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/MembershopTier");
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              lineHeight: "17.9px",
              letterSpacing: "8px",
            }}
          >
            Current
            <br />
            Rank
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "700",
                letterSpacing: "8px",
                alignSelf: "center",
              }}
            >
              JADE
            </Typography>

            <Box>
              <Box component="img" src={arrow} sx={{width:'20.81px'}} />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${vector1})`,
              width: "133px",
              height: "133px",
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: "-60px",
              right: "30px",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            mt: "10px",
            width: "355px",
            height: "auto",
            border: "1px solid #061622",
            backgroundColor: "#061622",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: "30px",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              width: "90%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Criteria for next Rank</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Typography sx={{ fontSize: "15px" }}>
                1. Active EMERALD 1L and 1R
              </Typography>

              <Box
                sx={{ width: "13px", height: "13px" }}
                component="img"
                src={x_mark_icon}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Typography sx={{ fontSize: "15px" }}>
                2. Left only Downline RV Required/Total 750000/489000
              </Typography>

              <Box
                sx={{ width: "13px", height: "13px" }}
                component="img"
                src={x_mark_icon}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Typography sx={{ fontSize: "15px" }}>
                3. Right only Downline RV Required/Total 750000/1755100
              </Typography>

              <Box
                sx={{ width: "13px", height: "13px" }}
                component="img"
                src={check_icon}
              />
            </Box>

            <Typography sx={{ mt: "20px" }}>3. Total Direct 4/5</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
