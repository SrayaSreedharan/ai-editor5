import React, { useState } from 'react';
import {Typography,TextField,Button,Paper, Stack,} from '@mui/material';

const Sidebar =() => {
    
    const[message,setMessage] = useState("")
    
    const list =["A responsive navbar with logo and navigation links",
          "A pricing card with features list and CTA button",
          "A contact form with validation and submit button",
          "A hero section with background image and call-to-action",
          "A product card with image, title, price, and add to cart button",]

    const buttonclick =(e)=>{
        setMessage(e.target.value)
    }
  return (
    <Paper elevation={3} sx={{ maxWidth: 500,margin: 'auto',mt: 5,p: 3,borderRadius: 2,}}>

      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
        🛠 Describe Your Component
      </Typography>

      <TextField multiline rows={3} fullWidth placeholder="Describe the react component you want to generate" variant="outlined"sx={{ mb: 2 }} value={message} onChange={(e) => setMessage(e.target.value)}/>

      <Button fullWidth variant="contained" sx={{ background: 'linear-gradient(to right, #4f46e5, #9333ea)',color: 'white',fontWeight: 600,textTransform: 'none',mb: 2,}}onClick={buttonclick}>
        ✨ Generate Component
      </Button>

      <Typography variant="body2" fontWeight="bold" gutterBottom>
        Example prompts:
      </Typography>
       <Stack  spacing={1}>
        {list.map((text,index)=>(
             <Button key={index} fullWidth variant="outlined" onClick={() => setMessage(text)} sx={{textTransform: 'none',backgroundColor: '#f3f4f6', color: '#111827', spacing:'3',border:'none',justifyContent: 'flex-start', }}>
                {text}
             </Button>
        ))}
       </Stack>
    </Paper>
  );
}
export default Sidebar;
