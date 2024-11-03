import { Box } from "@mui/material";
import NavbarPages from "./NavbarPages";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box sx={{ display: "flex" ,flexGrow:'1'}}>
      <Sidebar />

      <Box sx={{ width: "100%" }}>
        <NavbarPages />

        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
