import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Posts from './Posts';
import Products from './Products';

import '../styles/home.scss';

export default function Home({ profile }) {
  return (
    <Grid container spacing={4} justifyContent="space-between" className={`container`} style={{ position: 'relative' }}>
      <Grid md={4}>
        <Header profile={profile} />
      </Grid>
      <Grid md={8}>
        <main>
          <About profile={profile} />
          <Experience />
          <Projects />
          <Products />
          <Posts />
        </main>
        <footer>
          <div className='copyRight'>
            <p>This portfolio is built with Gatsby and MaterialUI.</p>
            <p><span className='copyYr'>© {new Date().getFullYear()}</span> <span>Portfolio by Klea Merkuri. All Rights Reserved.</span></p>
          </div>
        </footer>
      </Grid>
    </Grid>
  )
}
