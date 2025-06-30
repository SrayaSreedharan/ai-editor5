import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { createReactEditorJS } from '../helper/editors.js';
import { EDITOR_JS_TOOLS } from './Tools';



const ReactEditorJS = createReactEditorJS();

const Editor = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 0 0 1px #e5e7eb',
        backgroundColor: '#f9fafb',
        mr: 2,
      }}
    >
      <Box sx={{ p: 2, maxWidth: 'fit-content', mx: 2, mb: 1 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{
            backgroundColor: '#e5e7eb',
            borderRadius: 2,
            p: 0.5,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              p: 1.5,
              borderRadius: 1,
              minHeight: '32px',
              color: '#475569',
              '&.Mui-selected': {
                backgroundColor: '#fff',
                color: '#000',
                boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
              },
            },
          }}
        >
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CodeOutlinedIcon sx={{ fontSize: 18 }} />
                Editor
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <RemoveRedEyeOutlinedIcon sx={{ fontSize: 18 }} />
                Preview
              </Box>
            }
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />
                Export
              </Box>
            }
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          backgroundColor: tabIndex === 0 ? '#0f172a' : '#fff',
          color: tabIndex === 0 ? '#94a3b8' : '#6b7280',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 470,
          borderTop: '1px solid #e5e7eb',
          width: '100%',
        }}
      >
        {tabIndex === 0 && (
          <Box sx={{ width: '100%', backgroundColor: '#fff', p: 2, borderRadius: 2 }}>
            <ReactEditorJS
              tools={EDITOR_JS_TOOLS}
              defaultValue={{
                time: new Date().getTime(),
                blocks: [],
              }}
              onChange={async (api) => {
                const data = await api.saver.save();
                console.log('Editor Data:', data);
              }}
            />
          </Box>
        )}

        {tabIndex === 1 && (
          <Typography>Component preview will appear here after generation...</Typography>
        )}

        {tabIndex === 2 && (
          <Typography>Export functionality will be added here...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Editor;
