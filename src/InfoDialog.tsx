import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const InfoDialog = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="info-dialog">
            <DialogTitle id="info-dialog">About This Application</DialogTitle>
            <DialogContent>
                <p className='pb-2'>This is a demo admin application built with <a className='text-blue-500 underline hover:text-blue-700' href="https://subzero.cloud">subZero</a>.</p>
                <p className='pb-2'>
                    The heavy lifting is done by the subzero library which introspects the database schema and generates the admin UI on the fly.
                </p>

                <p className='pb-2'>
                    Source code is available on <a className='text-blue-500 underline hover:text-blue-700' href="https://github.com/subzerocloud/subzero-demo">GitHub</a> and consists of about 200 LOC for the backend (express server) and 300 LOC for the frontend (react admin).
                </p>
                <p className='pb-2 mt-4'>
                    You can run this demo locally by executing the following command:
                </p>
                <pre className='bg-gray-100 p-2 rounded-md'>
                    npx @subzerocloud/scaffold demo
                </pre>

                <p className='pb-2 mt-4'>
                    To setup a new project, run:
                </p>
                <pre className='bg-gray-100 p-2 rounded-md'>
                    npx @subzerocloud/scaffold new
                </pre>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default InfoDialog;
