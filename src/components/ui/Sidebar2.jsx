import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

const Sidebar2 = () => {
  const[css,setCss] = useState('');
  const [colour, setColour] = useState('');
  const [size, setSize] = useState('');
  const [radius, setRadius] = useState('');
  


  return (
     <Box px={2} py={4} >
   <Paper
           elevation={3}
           sx={{
             maxWidth: { xs: '100%', sm: 480 },
             margin: 'auto',
             p: { xs: 2, sm: 3 },
             borderRadius: 2,
           }}
         >

     <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center' ,color: 'black'}}>
      <SettingsOutlinedIcon/>  Style Options
      </Typography>
      
    <Box sx={{ minWidth: 120,mb: 2 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        CSS Framework<Select labelId="demo-simple-select-label" id="demo-simple-select" value={css} onChange={(e) => setCss(e.target.value)}>
          <MenuItem value="Tailwind CSS">Tailwind CSS</MenuItem>
          <MenuItem value="CSS Modules">CSS Modules</MenuItem>
          <MenuItem value="Styled Components">Styled Components</MenuItem>
        </Select>
      </FormControl>
    </Box>

     <Box sx={{ minWidth: 120,mb: 2 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
       Colour Scheme<Select labelId="demo-simple-select-label" id="demo-simple-select" value={colour} onChange={(e) => setColour(e.target.value)}>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="purple">Purple</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="grey">Grey</MenuItem>
        </Select>
      </FormControl>
    </Box>

     <Box sx={{ minWidth: 120,mb:2}} >
      <FormControl fullWidth size='small' >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        Component Size<Select labelId="demo-simple-select-label" id="demo-simple-select" value={size} onChange={(e) => setSize(e.target.value)}>
          <MenuItem value='small'>Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </FormControl>
    </Box>

     <Box sx={{ minWidth: 120,mb:2,mt:2}}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        Border Radius<Select labelId="demo-simple-select-label" id="demo-simple-select" value={radius} onChange={(e) => setRadius(e.target.value)}>
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="mediam">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </FormControl>
    </Box>

     <Box sx={{ mt: 3 }}>
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', alignItems: 'center', mb: 2, fontWeight: 600 }}
      >
        <ColorLensOutlinedIcon sx={{ mr: 1 }} />
        Quick Themes
      </Typography>

      <Grid container spacing={1} justifyContent="space-between">
        <Grid item xs={5.5}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#dbeafe',
              width: '180px',
              color: '#1e3a8a',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#dbeafe', opacity: 0.9 },
            }}
          >
            Modern Blue
          </Button>
        </Grid>
        <Grid item xs={5.5}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              width: '180px',
              backgroundColor: '#f3e8ff',
              color: '#6b21a8',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#f3e8ff', opacity: 0.9 },
            }}
          >
            Purple Gradient
          </Button>
        </Grid>
        <Grid item xs={5.5}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#dcfce7',
              width: '180px',
              color: '#166534',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#dcfce7', opacity: 0.9 },
            }}
          >
            Nature Green
          </Button>
        </Grid>
        <Grid item xs={5.5}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              width: '180px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#f3f4f6', opacity: 0.9 },
            }}
          >
            Minimal Gray
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Paper>
    </Box>
  )
}
export default Sidebar2
