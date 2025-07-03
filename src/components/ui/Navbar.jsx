import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1} sx={{ backgroundColor: 'white'}} >
        <Toolbar sx={{ py: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'rgba(104, 117, 255, 0.2)', mr: 1 }}>
          <AutoAwesomeIcon sx={{ color: '#685BFF' }} />
        </Avatar>
        <Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:' #4f46e5',fontWeight: 600}}>
          AI Component Generator
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Generate React components with natural language
          </Typography>
          </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
           <Button size="small" variant="outlined" sx={{ textTransform: 'none',borderRadius: 4,fontWeight: 500,borderColor: '#ccc',color: 'black',backgroundColor: '#f9fafb',}}>
        {'<>'} React.js + AI
      </Button>
        </Toolbar>
    
      </AppBar>
    </Box>
  );
}
