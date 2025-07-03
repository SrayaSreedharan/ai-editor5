import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab, Typography, Button } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { toast } from 'react-toastify';
import CodePreview from "@uiw/react-code-preview";

const Editor = ({ generatedCode }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [code, setCode] = useState(generatedCode || '');

  useEffect(() => {
    if (generatedCode) {
      setTabIndex(0); 
      setCode(generatedCode); 
    }
  }, [generatedCode]);

  const handleTabChange = (e, newValue) => setTabIndex(newValue);

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 0 0 1px #e5e7eb',
        backgroundColor: '#f9fafb',
        mr: 2,
        minHeight: '500px',
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

        {tabIndex === 0 && (
          <Box
            sx={{
              width: '100%',
              height: {
                xs: '400px',
                md: '600px',
              },
              maxWidth: {
                md: '960px',
              },
              mx: 'auto',
              position: 'relative',
            }}
          >
            <MonacoEditor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                scrollBeyondLastLine: false,
                wordWrap: 'on',
              }}
            />
            {code && (
              <Button
                size="small"
            
                
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  toast.success('Code copied!', {
                    position: 'bottom-right',
                    autoClose: 2000,
                  });
                }}
                sx={{
                  position: 'absolute',
                  top: 10,
                  backgroundColor: '#ffffff',
                  color:'black',
                  right: 10,
                  textTransform: 'none',
                  fontSize: '0.75rem',
                }}
              >
                Copy
              </Button>
            )}
          </Box>
        )}
        {tabIndex === 1 && (
           <Box sx={{ px: 4}}>
          <Typography>{generatedCode || 'Component preview will appear here after generation...'}</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Typography>Export functionality will be added here...</Typography>
        )}
        </Box>
        )
  }
export default Editor;
