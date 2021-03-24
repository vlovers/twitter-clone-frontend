import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStylesSignIn } from '../style';


interface ModalBlockProps {
    title?: string;
    children: React.ReactNode;
    classes: ReturnType<typeof useStylesSignIn>;
    open: boolean;
    onClose: any;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
    title,
    children,
    classes,
    open,
    onClose
}: ModalBlockProps): React.ReactElement => {

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.modalBlock}

        >
            <DialogTitle 
                id="alert-dialog-title" 
                onClick={onClose} 
                className={classes.modalBlockTitle}
            >
                {title}
                <CloseIcon/>
            </DialogTitle>
            <DialogContent className={classes.modalBlockContent}>
                {children}
            </DialogContent>
            
        </Dialog>

    )
}
