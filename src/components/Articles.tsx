import { Typography, Paper, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Article 1",
    author: "GDG",
    date: "October 2, 2024",
    content: `hi`,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Article 2",
    author: "GDG",
    date: "September 25, 2024",
    content: `Hi`,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Article 3",
    author: "GDG",
    date: "August 10, 2024",
    content: `ee`,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Article 4",
    author: "GDG",
    date: "July 5, 2024",
    content: `ff`,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Article 4",
    author: "GDG",
    date: "July 5, 2024",
    content: `ff`,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Article 4",
    author: "GDG",
    date: "July 5, 2024",
    content: `ff`,
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

const Articles = () => {
  return (
    <div id="articles" className="mt-2 min-h-screen bg-[#ffffff] px-2 md:px-10">
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          color="primary"
        >
          Articles
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item xs={12} md={4} key={article.id}>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 + index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Paper
                elevation={4}
                sx={{
                  overflow: "hidden",
                  borderRadius: 2,
                  height: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={article.imageUrl}
                  alt={article.title}
                  sx={{ width: "100%", height: 200, objectFit: "cover" }}
                />

                <Box
                  sx={{
                    padding: 4,
                    height: "calc(100% - 200px)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Typography variant="h5" component="h3" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    By {article.author} - {article.date}
                  </Typography>

                  <Box
                    sx={{
                      height: "80px",
                      overflow: "hidden",
                      transition: "height 0.3s ease-in-out",
                      "&:hover": { height: "auto" },
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {article.content}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Articles;
