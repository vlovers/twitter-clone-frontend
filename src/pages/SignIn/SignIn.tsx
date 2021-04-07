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

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

function SignIn() {
    const classes = useStylesSignIn();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [age, setAge] = React.useState('');
    const handleChange = (event: any) => {
      setAge(event.target.value);
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
           
            
            {/* <ModalBlock 
                onClose={handleClose} 
                title="Cоздайте учетную запись" 
                open={open} 
                classes={classes}>
                <FormControl fullWidth>
                    <FormGroup >
                        <TextField
                            fullWidth
                            autoFocus
                            id="name"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            className={classes.modalInput}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            label="E-mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            className={classes.modalInput}
                        />
                        <Typography variant="h5" className={classes.modalRegTextMain}>
                            Дата рождения
                        </Typography>
                        <Typography variant="h6" className={classes.modalRegTextSecond}>
                            Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная
                            запись предназначена для компании, домашнего животного и т. д.
                        </Typography>

                        
                        <div className={classes.modalRegSelect}>
                            <FormControl>
                                <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
                                <BootstrapInput id="demo-customized-textbox" />
                            </FormControl>
                            <FormControl>
                                <InputLabel id="demo-customized-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                                <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </FormGroup>
                </FormControl>
            </ModalBlock> */}
        </div>
    )
}

export default SignIn
