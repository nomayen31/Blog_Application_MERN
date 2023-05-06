import React from 'react'
import Banner from '../bannner/Banner.js';
import Categories from '../home//Categories';
import { Grid } from '@mui/material';

const Home = () => {
  return (
      <>
       <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    Post
                </Grid>
            </Grid>
      </>
  )
}

export default Home;