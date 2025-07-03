import React, { lazy, Suspense, useState } from 'react';
import { Box} from '@mui/material';
// import Sidebar from '../components/ui/Sidebar';
// import Sidebar2 from '../components/ui/Sidebar2';
import Editor from '../components/ui/Editor';
import ButtonAppBar from '../components/ui/Navbar';
// import Footer from '../components/ui/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from '../components/ui/Loading';


const Footer = lazy(()=> import ('../components/ui/Footer'))
const Sidebar2 = lazy(()=> import ('../components/ui/Sidebar2'))
const Sidebar = lazy(()=> import ('../components/ui/Sidebar'))

const Home = () => {

  const [generatedCode, setGeneratedCode] = useState('');
  const [styleOptions, setStyleOptions] = useState({
    framework: 'Tailwind CSS',
    colorScheme: 'blue',
    size: 'medium',
    rounded: 'medium',
  });

  return (
    <Box sx={{display: 'flex',flexDirection: 'column',minHeight: '100vh',backgroundColor: '#f9fafb',}}>
      <Suspense fallback={<Loading type="ButtonAppBar" />}>
          <ButtonAppBar />
      </Suspense>

      <Box sx={{flex: 1,display: 'flex',flexDirection: { xs: 'column', md: 'row' },px: { xs: 2, md: 3 },py: { xs: 2, md: 3 },gap: 2,mt: { xs: 0, md: -1 }}}>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '480px' } , mt: { xs: 0, md: -2},}}>
            <Suspense fallback={<Loading type="Sidebar" />}>
              <Sidebar setGeneratedCode={setGeneratedCode} styleOptions={styleOptions} />
            </Suspense>

            <Suspense fallback={<Loading type="Sidebar2" />}>
              <Sidebar2 styleOptions={styleOptions} setStyleOptions={setStyleOptions} />
            </Suspense>
          </Box>

        <Box sx={{flex: 1,width: '100%',mt: { xs: 0, md: 2 },gap: 2,}}>
          <Editor generatedCode={generatedCode}/>
        </Box>
      </Box>

     <Suspense fallback={<Loading type="Footer" />}>
              <Footer />
     </Suspense>

       <ToastContainer position="bottom-right" autoClose={3000} />
    </Box>
  );
};
export default Home;
