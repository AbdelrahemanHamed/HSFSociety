import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // استيراد الأيقونة الجديدة
import logo from "../assets/logo.png";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const links = [
    { name: "Home", path: "/dashboard" },
    { name: "Academy", path: "/academy" },
    { name: "Sessions", path: "/sessions" },
    { name: "Trade Alerts", path: "/trade-alerts" },
    { name: "Scanners", path: "/scanners" },
    { name: "Be a Partner", path: "/be-a-partner" },
    { name: "Login", path: "/login" },
  ];

  return (
    <Box
      className="navbar"
      sx={{
        width: "100%",
        height: "90px",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "99",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000", // Adding background color for visibility
      }}
    >
      <Box
        sx={{
          display: "flex",
          color: "#fff",
          justifyContent: "space-between",
          width: "95%",
          mx: "auto",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ width: "104px", height: "53px" }}>
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Links for Medium and Larger Screens */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px", alignItems: "center" }}>
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              style={{
                color: "#fff",
                fontSize: { xs: "20px", xl: "25px" },
                fontFamily: "SF Pro Display",
              }}
            >
              {link.name}
            </Link>
          ))}

          <Button
            sx={{
              width: "154px",
              height: "31px",
              background: "linear-gradient(90deg, #46DFFC 0%, #E14696 100%)",
              color: "#fff",
              fontSize: { xs: "20px", xl: "25px" },
              fontWeight: "700",
            }}
          >
            Join us
          </Button>

          <Button
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              width: "50.53px",
              height: "27.95px",
            }}
          >
            AR
          </Button>
        </Box>

        {/* Menu Button for Small Screens */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <AiOutlineMenu />
        </IconButton>
      </Box>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            backgroundColor: "#000",
            height: "100%",
            color: "#fff",
          }}
        >
          <List sx={{ width: "100%" }}>
            {links.map((link) => (
              <ListItem
                button
                key={link.name}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Link
                  to={link.path}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary={link.name} />
                </Link>
              </ListItem>
            ))}
          </List>

          <Button
            sx={{
              width: "154px",
              height: "31px",
              background: "linear-gradient(90deg, #46DFFC 0%, #E14696 100%)",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              mt: 2,
            }}
            onClick={() => setIsDrawerOpen(false)}
          >
            Join us
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
