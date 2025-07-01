import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Stack, Box } from '@mui/material';
import openRouterApi from '../../helper/openRouterApi';

const Sidebar = ({ setGeneratedCode, styleOptions }) => {
  const [message, setMessage] = useState("");

  const list = [
    "A responsive navbar with logo and navigation links",
    "A pricing card with features list and CTA button",
    "A contact form with validation and submit button",
    "A hero section with background image and call-to-action",
    "A product card with image, title, price, and add to cart button",
  ];

  const buttonClick = async () => {
    const result = await openRouterApi(message,styleOptions); 
    if (result?.code) {
      setGeneratedCode(result.code); 
    } else {
      alert("Failed to generate code");
    }
  };
  

  return (
    <Box px={2} py={4}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: { xs: '100%', sm: 480 },
          margin: 'auto',
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          🛠 Describe Your Component
        </Typography>

        <TextField
          multiline
          rows={3}
          fullWidth
          placeholder="Describe the React component you want to generate"
          variant="outlined"
          sx={{ mb: 2 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #4f46e5, #9333ea)',
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            mb: 2,
          }}
          onClick={ buttonClick}
        >
          ✨ Generate Component
        </Button>

        <Typography variant="body2" fontWeight="bold" gutterBottom>
          Example prompts:
        </Typography>

        <Stack spacing={1}>
          {list.map((text, index) => (
            <Button
              key={index}
              fullWidth
              variant="outlined"
              onClick={() => setMessage(text)}
              sx={{
                textTransform: 'none',
                backgroundColor: '#f3f4f6',
                color: '#111827',
                border: 'none',
                justifyContent: 'flex-start',
              }}
            >
              {text}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Sidebar;
