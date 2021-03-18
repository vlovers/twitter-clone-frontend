import React from 'react';
import { Button, TextField,Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

import { useStylesSignIn } from '../style';


interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    classes: ReturnType<typeof useStylesSignIn>;
    open: boolean;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
    title,
    children,
    classes,
    open,
}: ModalBlockProps): React.ReactElement => {

    return (
        <Dialog
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            
        </Dialog>

    )
}
