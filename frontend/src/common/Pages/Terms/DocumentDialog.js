import React from 'react';
import Dialog from '../../Components/Dialog';

export default ({ title, open, handleClose }) => {
    return (
        <Dialog
            title={title}
            open={open}
            handleClose={handleClose}
            content="content"
            fullScreen
            alignTitle='center'
        />
    );
};