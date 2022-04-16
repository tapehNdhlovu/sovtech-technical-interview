import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <div className="col d-flex justify-content-center">
      <Box m={6} sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
}
