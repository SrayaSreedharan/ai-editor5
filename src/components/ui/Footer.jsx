import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'

const Footer = () => {
 
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        py: 2,
        backgroundColor: '#f9fafb', 
        borderTop: '1px solid #e5e7eb',
      }}
    >
     
      <Typography variant="body2" color="text.secondary">
        © 2025 AI Component Generator. Built by Sraya Sreedharan .
        <Link href="https://github.com/SrayaSreedharan?tab=repositories" underline="hover" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </Typography>

      <Stack direction="row" spacing={1}>
        <IconButton href="https://github.com/SrayaSreedharan?tab=repositories" target="_blank" rel="noopener">
          <GitHubIcon sx={{ color: '#000' }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/sraya-sreedharan-0653a1259/" target="_blank" rel="noopener">
          <LinkedInIcon sx={{ color: '#000' }} />
        </IconButton>
      </Stack>
    </Box>
  );
}
export default Footer
