import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

export default function LatestConversation() {
  return (
    <Box>
      <Typography variant="h6" fontWeight={100}>
        Latest Conversation
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {listConversation.map((item, index) => (
          <Box key={item.image}>
            <ListItem key={item.image} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {` — ${item.text}`}
                  </>
                }
              />
            </ListItem>
            {listConversation.length !== index + 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
}

const listConversation = [
  {
    image: "https://mui.com/static/images/avatar/1.jpg",
    name: "Ali Connors",
    title: "Brunch this weekend?",
    text: "I'll be in your neighborhood doing errands this…",
  },
  {
    image: "https://mui.com/static/images/avatar/2.jpg",
    name: "to Scott, Alex, Jennifer",
    title: "Summer BBQ",
    text: "Wish I could come, but I'm out of town this…",
  },
  // {
  //   image: "https://mui.com/static/images/avatar/3.jpg",
  //   name: "Sandra Adams",
  //   title: "Oui Oui",
  //   text: "Do you have Paris recommendations? Have you ever…",
  // },
];
