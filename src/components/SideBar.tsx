import React from 'react'
import { Typography, InputAdornment, Divider, IconButton, TextField, Avatar, Button, TextareaAutosize, Hidden} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';

export const SideBar = ({classes}: any) => {
    return (
        <ul className={classes.sideBarBtns}>
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={`${classes.sideBarBtn} active`}
                    startIcon={<HomeRoundedIcon />}
                >
                    Главная
                </Button>
            </li>
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.sideBarBtn}
                    startIcon={<SearchIcon />}
                >
                    Поиск
                </Button>
            </li>
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.sideBarBtn}
                    startIcon={<NotificationsNoneRoundedIcon />}
                >
                    Уведомления
                </Button>
            </li>
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.sideBarBtn}
                    startIcon={<MailOutlineRoundedIcon />}
                >
                    Сообщения
                </Button>
            </li>
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.sideBarBtn}
                    startIcon={<ListAltOutlinedIcon />}
                >
                    Списки
                </Button>
            </li>
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.sideBarBtn}
                    startIcon={<TwitterIcon />}
                >
                    Темы
                </Button>
            </li>   
            <li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.sideBarBtn}
                    startIcon={<PersonOutlineOutlinedIcon />}
                >
                    Профиль
                </Button>
            </li>   
                
        </ul>
    )
}
