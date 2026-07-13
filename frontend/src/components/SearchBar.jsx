import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function SearchBar ({ onSearch }) {
  const [handle, setHandle] = useState("");

  const handleSearch = () => {
    if (handle.trim()) {
      onSearch(handle.trim());
    }
  };

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 5,
        mb: 5,
        mr: 65,
      }}
    >
      <TextField
        label="Enter CodeForces Handle"
        variant="outlined"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        sx={{ width: 350}}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSearch}
        sx={{ height: 55 }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;