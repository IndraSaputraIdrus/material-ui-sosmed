import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={{ xs: 0, md: 2 }}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}
