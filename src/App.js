import { Box } from '@material-ui/core';
import React from 'react';
import TheContent from './components/TheContent';
import TheFooter from './components/TheFooter';
import TheToolbar from './components/TheToolbar';

function App() {
    return (
        <Box minHeight="100vh">
            <TheToolbar />
            <TheContent />
            <TheFooter />
        </Box>
    );
}

export default App;
