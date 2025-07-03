// components/ui/UILoader.jsx
import React from 'react';
import { Box, Skeleton } from '@mui/material';

const Loading = ({ type }) => {
  switch (type) {
    case 'Sidebar':
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Skeleton variant="text" width="80%" height={30} />
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Box>
      );

    case 'Sidebar2':
      return (
        <Box sx={{ mt: 2 }}>
          <Skeleton variant="rounded" width="100%" height={150} />
        </Box>
      );

    case 'Footer':
      return (
        <Box sx={{ px: 2, py: 4 }}>
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="20%" />
        </Box>
      );

    case 'ButtonAppBar':
      return (
        <Box sx={{ px: 2, py: 1 }}>
          <Skeleton variant="rectangular" width="100%" height={50} />
        </Box>
      );

    default:
      return (
        <Box>
          <Skeleton variant="rectangular" width="100%" height={300} />
        </Box>
      );
  }
};

export default Loading;
