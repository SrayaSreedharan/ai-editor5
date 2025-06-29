// pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/ui/Sidebar';
import Footer from '../components/ui/Footer';
import { Box } from '@mui/material';
import Sidebar2 from '../components/ui/Sidebar2';
import ButtonAppBar from '../components/ui/Navbar';
import Editor from '../components/ui/Editor';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',backgroundColor: '#f9fafb'  }}>
      <ButtonAppBar/>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box sx={{ width: '480px', display: 'flex', flexDirection: 'column', ml: 2, mr: 2, }}>
          <Sidebar />
           <Box sx={{ mb: 9}}>
          <Sidebar2 />
          </Box>
        </Box>

        <Box sx={{ flex: 1,mt:5 }}>
          <Editor/>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Home;
