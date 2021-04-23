import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { withStyles } from '@material-ui/core/styles';

import {
    Button,
    FormControl,
    FormGroup,
    InputBase,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';

import { Color } from '@material-ui/lab/Alert';

import { ModalBlock } from '../../../components/Modal';
import { useStylesSignIn } from '../../../style';
import { Notification } from '../../../components/Notification'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUp } from '../../../store/ducks/user/actionCreatores';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/ducks/types';

interface RegisterModalProps {
    open: boolean,
    handleClose: () => void
}

export interface RegisterFormProps {
    email: string,
    fullname: string,
    password: string,
    password2: string,
    username: string,
}

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email("Неверный E-mail").required("Введите E-mail"),
    fullname: yup.string().min(2, "Слишком короткое имя").required("Введите имя"),
    password: yup.string().min(6, "Слишком короткий пароль").required("Введите пароль"),
    password2: yup.string().oneOf([yup.ref('password'), undefined], "Пароли не совпадают"),
    username: yup.string().min(2, "Слишком короткий логин").required("Введите логин"),


});

const RegisterModal: React.FC<RegisterModalProps> = ({handleClose, open}): React.ReactElement => { 
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectUserStatus)
    const [age, setAge] = React.useState('');
    const handleChange = (event: any) => {
        setAge(event.target.value);
    };

    const { control, handleSubmit, formState: { errors },} = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });



    const onSubmit = async (openNotification: (text: string, type: Color) => void, data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    };

    useEffect(() => {
        if(loadingStatus === LoadingStatus.SECCESS) {
            // openNotification('Авторизация успешна', 'success')
        } else {
            // openNotification('Неверный логин или пароль.', 'error')

        }
    }, [loadingStatus])

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

    return <Notification>
            {
                openNotification => (
                    <ModalBlock 
                        onClose={handleClose} 
                        title="Cоздайте учетную запись" 
                        open={open} 
                        classes={classes}>
                        <FormControl fullWidth>
                        <form onSubmit={handleSubmit(onSubmit.bind(this, openNotification))}>
                            <Controller
                                name="fullname"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                    <TextField 
                                        {...field}
                                        fullWidth
                                        autoFocus
                                        id="fullname"
                                        name="fullname"
                                        label="Имя"
                                        helperText={errors.fullname?.message}
                                        error={!!errors.fullname}
                                        className={classes.modalInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled" />
                                    }
                            />
    
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                    <TextField 
                                        {...field}
                                        fullWidth
                                        autoFocus
                                        id="email"
                                        name="email"
                                        label="E-mail"
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                        className={classes.modalInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled" />
                                    }
                            />

                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                    <TextField 
                                        {...field}
                                        fullWidth
                                        autoFocus
                                        id="username"
                                        name="username"
                                        label="Логин"
                                        helperText={errors.username?.message}
                                        error={!!errors.username}
                                        className={classes.modalInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled" />
                                    }
                            />  
        
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                    <TextField 
                                        {...field}
                                        fullWidth
                                        autoFocus
                                        id="password"
                                        name="password"
                                        label="Пароль"
                                        helperText={errors.password?.message}
                                        error={!!errors.password}
                                        className={classes.modalInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled" />
                                    }
                            />

                            <Controller
                                name="password2"
                                control={control}
                                defaultValue=""
                                render={({ field }) => 
                                    <TextField 
                                        {...field}
                                        fullWidth
                                        autoFocus
                                        id="password2"
                                        name="password2"
                                        label="Повторите пароль"
                                        helperText={errors.password2?.message}
                                        error={!!errors.password2}
                                        className={classes.modalInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled" />
                                    }
                            />

                            <Button 
                                fullWidth           
                                variant="contained" 
                                color="primary" 
                                type="submit"
                                className={classes.modalBtn}>
                                Войти
                            </Button>
{/* 
                            <Typography variant="h5" className={classes.modalRegTextMain}>
                                Дата рождения
                            </Typography>
                            <Typography variant="h6" className={classes.modalRegTextSecond}>
                                Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная
                                запись предназначена для компании, домашнего животного и т. д.
                            </Typography> */}
    
                            
                            {/* <div className={classes.modalRegSelect}>
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
                            </div> */}
                        </form>
                    </FormControl>
                </ModalBlock>
                )
            }
        </Notification>

}

export default RegisterModal;