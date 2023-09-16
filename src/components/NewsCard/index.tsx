import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";
import "./index.css";

const NewsCard = ({ newsData }: any) => {
  const handleLinkClick = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <div className="news-card-wrapper">
      <Grid container direction={"row"} spacing={2}>
        {newsData.length > 0 &&
          newsData.map((news: any) => {
            return (
              <Grid item spacing={2}>
                <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                    sx={{ height: 100 }}
                    image={news.image}
                    title={news.title}
                  />
                  <CardContent className="news-content">
                    {news.content}
                  </CardContent>
                  <CardActions>
                    <Link
                      fontSize={10}
                      component="button"
                      variant="body2"
                      onClick={() => handleLinkClick(news.url)}
                    >
                      Learn More
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default NewsCard;
