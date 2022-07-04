//App.js
import React, { useState, useEffect } from "react";
import "/Users/mptay/Desktop/myblog/client/src/App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import blogLogo from "/Users/mptay/Desktop/myblog/client/src/Assets/blogLogo.gif";
import Blogs from "/Users/mptay/Desktop/myblog/client/src/components/Blogs";
import BlogPostsForm from "/Users/mptay/Desktop/myblog/client/src/components/BlogPostsForm";
import useStyles from "/Users/mptay/Desktop/myblog/client/src/styles/app.styles.js";
import { useDispatch } from "react-redux";
import { fetchAllBlogPosts } from "/Users/mptay/Desktop/myblog/client/src/actions/blogPosts";



function App() {
  const [blogPostId, setBlogPostId] = useState(0);
  const dispatch = useDispatch();
  const appStyles = useStyles();

  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [blogPostId, dispatch]);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <AppBar
          className={appStyles.navigationBar}
          position="static"
          color="inherit"
        >
          <img
            className={appStyles.image}
            src={blogLogo}
            alt="icon"
            height="100"
          />
          <Typography className={appStyles.title} variant="h2" align="center">
            Mern awesome blog
          </Typography>
        </AppBar>
        <Grow in>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} sm={3}>
              <BlogPostsForm
                blogPostId={blogPostId}
                setBlogPostId={setBlogPostId}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Blogs setBlogPostId={setBlogPostId} />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </div>
  );
}

export default App;