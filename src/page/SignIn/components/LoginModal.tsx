import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {
    Button,
    FormControl,
    FormGroup,
    TextField,
} from '@material-ui/core';

import { Color } from '@material-ui/lab/Alert';

import { ModalBlock } from '../../../components/Modal';
import { useStylesSignIn } from '../../../style';
import { userApi } from '../../../services/api/userApi';
import { Notification } from '../../../components/Notification'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from '../../../store/ducks/user/actionCreatores';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/ducks/types';

interface LoginModalProps {
    open: boolean,
    handleClose: () => void
}

export interface LoginFormProps {
    email: string,
    password: string
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email("Неверный E-mail").required("Введите E-mail"),
    password: yup.string().min(6, "Слишком короткий пароль").required("Введите пароль"),
});

const LoginModal: React.FC<LoginModalProps> = ({handleClose, open}): React.ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectUserStatus)

    const { control, handleSubmit, formState: { errors },} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });



    const onSubmit = async (openNotification: (text: string, type: Color) => void, data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    };

    useEffect(() => {
        if(loadingStatus === LoadingStatus.SECCESS) {
            // openNotification('Авторизация успешна', 'success')
        } else {
            // openNotification('Неверный логин или пароль.', 'error')

        }
    }, [loadingStatus])

    return <Notification>
            {
                openNotification => (
                    <ModalBlock 
                    onClose={handleClose} 
                    title="Войти в акаунт" 
                    open={open}
                    classes={classes}>
                    
                    <form onSubmit={handleSubmit(onSubmit.bind(this, openNotification))}>
                        <FormControl fullWidth>
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
                                        label="Password"
                                        helperText={errors.password?.message}
                                        error={!!errors.password}
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
                        </FormControl>
                    </form>
                </ModalBlock>
                )
            }
        </Notification>

}

export default LoginModal;