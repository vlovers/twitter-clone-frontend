import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

import { useStylesSignIn } from '../style';

function SignIn() {
    const classes = useStylesSignIn();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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
                    className={classes.signSideBtn}>
                    Войти
                </Button>


                
            </div>
        </div>
    )
}

export default SignIn
