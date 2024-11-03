import { Box } from "@mui/material";
import  { useState } from "react";

function Test() {
  let [levels] = useState([
    { id: 1, items: [1] },
    { id: 2, items: [1, 2] },
  ]);
  return (
    <Box>
      {levels.map((level, index) => {
        return (
          <div key={index} style={{ display: "flex", gap: "50px" }}>
            <div>{level.id}</div>
            {level.items.map((num, index) => {
              return <div key={index}>{num}</div>;
            })}
          </div>
        );
      })}
    </Box>
  );
}

export default Test;
