import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button,
    FormControl,
    FormGroup,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    NativeSelect,
    InputBase,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

import { useStylesSignIn } from '../../style';
import { ModalBlock } from '../../components/Modal';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';



function SignIn() {
    const classes = useStylesSignIn();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.wrpper}>
            <div className={classes.blueSide}>
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="blueSide"/>
                <TwitterIcon className={classes.blueSideIcon}/>

            </div>
            <div className={classes.signSide}>
                <TwitterIcon className={classes.signSideIcon}/>
                <Typography className={classes.signSideTitle} variant="h3">В курсе происходящего</Typography>
                <Typography className={classes.signSidePretitle} variant="h6">Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <Button onClick={handleClickOpen}
                    variant="contained"
                    color="primary"
                    className={classes.signSideBtn}>
                    Зарегистрироваться
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handleClickOpen}
                    className={classes.signSideBtn}>
                    Войти
                </Button>
            </div>


            <LoginModal open={open} handleClose={handleClose}/>
            {/* <RegisterModal open={open} handleClose={handleClose}/> */}


        </div>
    )
}

export default SignIn
