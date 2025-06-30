// pages/Dashboard.jsx
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../components/ui/Sidebar';
import Sidebar2 from '../components/ui/Sidebar2';
import Editor from '../components/ui/Editor';
import ButtonAppBar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
      }}
    >
      {/* Top Navbar */}
      <ButtonAppBar />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          px: { xs: 2, md: 3 },
          py: { xs: 2, md: 3 },
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Sidebar Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '100%',  md: '480px' },
          }}
        >
          <Sidebar />
          <Sidebar2 />
        </Box>

        {/* Editor Section */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            mt: { xs: 0, md: 5 },
          }}
        >
          <Editor />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
