import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Color } from '@material-ui/core';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const withNotification = (children: React.ReactElement) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [notificationObj, setNotificationObj] = React.useState<{text: string, type: Color}>();


    const openNotification = (text: string, type: Color) => {
        setNotificationObj({
            text,
            type
        });
        setOpen(true)
    };

    return (
        <>
            {React.cloneElement(children, { openNotification })}
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={notificationObj?.type}>
                {notificationObj}
                </Alert>
            </Snackbar>
        </>
    );
}