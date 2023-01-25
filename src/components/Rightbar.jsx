import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import LatestConversation from "./LatestConversation";

const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        position="fixed"
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="start"
        gap={2}
      >
        <Box>
          <Typography variant="h6" fontWeight={100}>
            Online Friend
          </Typography>
          <AvatarGroup max={7}>
            {listAvatar.map((image) => (
              <Avatar key={image} alt="person" src={image} />
            ))}
          </AvatarGroup>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={100}>
            Latest Photos
          </Typography>
          <ImageList sx={{ width: "100%" }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                {" "}
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <LatestConversation />
      </Box>
    </Box>
  );
};

export default Rightbar;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

const listAvatar = [
  "https://randomuser.me/api/portraits/men/84.jpg",
  "https://randomuser.me/api/portraits/men/87.jpg",
  "https://randomuser.me/api/portraits/women/63.jpg",
  "https://randomuser.me/api/portraits/women/48.jpg",
  "https://randomuser.me/api/portraits/women/85.jpg",
  "https://randomuser.me/api/portraits/men/81.jpg",
  "https://randomuser.me/api/portraits/men/80.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
];
