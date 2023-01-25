import { Box } from "@mui/material";
import MyCard from "./MyCard";

const listFeed = [
  { image: "default" },
  { image: "/panorama1.jpg" },
  { image: "/panorama2.jpg" },
  { image: "/panorama3.jpg" },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {listFeed.map((item, index) => (
        <MyCard key={index} image={item.image} />
      ))}
    </Box>
  );
};

export default Feed;
