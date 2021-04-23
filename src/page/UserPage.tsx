import React, { useEffect } from 'react';
import {
    Typography,
    InputAdornment,
    Divider,
    IconButton,
    TextField,
    Avatar,
    Button,
    CircularProgress,
    Grid,
    Box,
    Paper,
    FormControl
} from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {
    Twitter as TwitterIcon,
    HomeRounded as HomeRoundedIcon,
    NotificationsNoneRounded as NotificationsNoneRoundedIcon,
    MailOutlineRounded as MailOutlineRoundedIcon,
    ListAltOutlined as ListAltOutlinedIcon,
    PersonOutlineOutlined as PersonOutlineOutlinedIcon,
    FavoriteBorder as FavoriteBorderIcon,
    RepeatSharp as RepeatSharpIcon,
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    Search as SearchIcon,
    PhotoOutlined as PhotoOutlinedIcon,
    GifOutlined as GifOutlinedIcon,
    Add as AddIcon,
    SubjectOutlined as SubjectOutlinedIcon,
    SentimentSatisfiedAltOutlined as SentimentSatisfiedOutlinedIcon,
    EventNoteOutlined as EventNoteOutlinedIcon,
    Image as ImageIcon,
    Work as WorkIcon,
    BeachAccess as BeachAccessIcon
} from '@material-ui/icons';

import { useStylesHome, useStylesSignIn } from '../style';
import { Tags } from '../components/Tags';
import { Tweet } from '../components/Tweet';

import { SideBar } from '../components/SideBar';
import { AddTweetForm } from '../components/AddTweetForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actionCreatores';
import { selectIsTweetsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors';
import { ModalBlock } from '../components/Modal';
import { fetchTags } from '../store/ducks/tags/actionCreatores';
import { FullTweet } from '../components/FullTweet';

import {Route, Link} from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { RandomUsers } from '../components/RandomUsers';
import DropzoneAreaExample from '../components/UploadAria';
import { selectUserData, selectUserState } from '../store/ducks/user/selectors';



import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Controller } from 'react-hook-form';
import { userApi } from '../services/api/userApi';
import format from 'date-fns/format';
import SideUserInfo from '../components/SideUserInfo';
import { axios } from '../core/axios';


const Home = (): JSX.Element => {
    const classes = useStylesHome();
    const classesSignIn = useStylesSignIn();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems)
    const user = useSelector(selectUserState)
    
    const userData = user && user?.data 

    const isLoading = useSelector(selectIsTweetsLoading)
    const [open, setOpen] = React.useState(false);  

    const handleClickFollowing = async () => {
        const { data } = await axios.patch('/users/', {followers: userData ? userData._id : undefined});
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch])


    
    const [value, setValue] = React.useState(2);

    const [userInfo, setUserInfo] = React.useState({
        fullname: userData?.fullname || "",
        about: userData?.about || "",
        location: "",
        website:  userData?.website || "",
        birthday: ""
    });

    console.log( userData?.createdAt);
    

    // console.log(format(new Date(userData?.createdAt), "MMMM yyyy"));
    
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };


    const updateUserData = () => {
        userApi.userUpdate(userInfo)
    }
    
    return (
        <Grid className={classes.fsd} container spacing={2}>
            <Grid className={classes.sideBarWrapp} item xs={3}>
                <div>

                    <Link to={`/home`}>
                        <TwitterIcon className={classes.sideBarLogo}/>
                    </Link>
                    <SideBar classes={classes}/>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.onTweetBtn}>
                        Твитнуть
                    </Button>
                    <ModalBlock
                        classes={classesSignIn}
                        open={open}
                        onClose={handleClose}
                        >
                        <AddTweetForm classes={classes}/>
                    </ModalBlock>
                </div>

                <SideUserInfo classes={classes} userData={userData}/>
            </Grid>
      
            <Grid className={classes.contentWrap} item xs={6}>
            <div className={classes.mainTitle}>
                    <div className={classes.dFlexAC} style={{height: 32}}>
                        <BackButton/>
                        <Typography variant="h6">{userData?.fullname}</Typography>
                    </div>
                </div>

                <img src="https://pbs.twimg.com/profile_banners/1320150332/1617403057/1500x500" className={classes.headerPhoto}></img>
                <div style={{padding: "0px 20px"}}>

                    <div className={classes.dFlex} style={{justifyContent: "space-between"}}>
                        <Avatar src={userData?.avatar} className={classes.userAvatar}></Avatar>
                        <div className={classes.userBtn}>
                        <IconButton className={classes.userBtnIcon}>
                            <FavoriteBorderIcon/>
                        </IconButton>

                        <IconButton className={classes.userBtnIcon}>
                            <FavoriteBorderIcon/>
                        </IconButton>

                        <IconButton className={classes.userBtnIcon}>
                            <FavoriteBorderIcon/>
                        </IconButton>

                            <Button 
                                variant="contained"
                                color="secondary"
                                onClick={handleClickFollowing}
                                className={classes.userFollowBtn}
                                >Following</Button>
                        </div>
                    </div>

                    <Typography className={classes.userFullName}>{userData?.fullname}</Typography>
                    <Typography className={classes.userName}>@{userData?.username}</Typography>
                    <Typography className={classes.userBio}>{userData?.about} <a href={userData?.website} className={classes.userBioLink}>{userData?.website}</a></Typography>
                    <div className={classes.dFlex}>
                        <Typography className={classes.userBirthdayDate}><CakeIcon/>Born August 13</Typography>
                        {/* <Typography className={classes.userRegisterDate}><DateRangeIcon/>Joined {format("2021-04-08T07:30:48.483+00:00")}</Typography> */}
                    </div>
                    

                    <div className={classes.dFlex}>
                        <Typography className={classes.userFollow}>2,786 <span>Followers</span></Typography>
                        <Typography className={classes.userFollow}>2,786 <span>Followers</span></Typography>
                    </div>
                </div>

                <Paper square className={classes.userPageTabs} >
                <Tabs 
                    className={classes.userPageTabs} 
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab className={classes.userPageTab} label="Tweets" />
                    <Tab className={classes.userPageTab} label="Tweets & replies" />
                    <Tab className={classes.userPageTab} label="Media" />
                    <Tab className={classes.userPageTab} label="Likes" />

                </Tabs>
                </Paper>

                
                {
                    isLoading ? <div className={classes.tweetsLoading}><CircularProgress/></div> : 
                    tweets.map(tweet => (
                        <Link to={`/user/tweet/${tweet._id}`} style={{textDecoration: "none"}}>
                            <Tweet key={tweet._id} {...tweet}/>
                        </Link>
                    ))
                }


                <ModalBlock 
                    onClose={handleClose} 
                    title="Войти в акаунт" 
                    open={false}
                    classes={classesSignIn}>
                        <TextField 
                            fullWidth
                            autoFocus
                            id="name"
                            value={userInfo.fullname}
                            onChange={(e) => setUserInfo({...userInfo, fullname: (e.target.value)})}
                            name="name"
                            label="Имя"
                            className={classesSignIn.modalInput}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled" />

                        <TextField 
                            fullWidth
                            autoFocus
                            onChange={(e) => setUserInfo({...userInfo, about: (e.target.value)})}
                            id="about"
                            value={userInfo.about}
                            name="about"
                            label="Биография"
                            className={classesSignIn.modalInput}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled" />
                        <TextField 
                            fullWidth
                            autoFocus
                            id="lokation"
                            value={userInfo.location}
                            onChange={(e) => setUserInfo({...userInfo, location: (e.target.value)})}
                            name="lokation"
                            label="Расположение"
                            className={classesSignIn.modalInput}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled" />             
                        <TextField 
                            fullWidth
                            autoFocus
                            id="website"
                            onChange={(e) => setUserInfo({...userInfo, website: (e.target.value)})}
                            name="website"
                            value={userInfo.website}
                            label="Сайт"
                            className={classesSignIn.modalInput}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled" />
                        <Button onClick={updateUserData}>Update</Button>
                </ModalBlock>
            </Grid>

            <Grid item xs={3}>
                <TextField
                    className={classes.searchInput}
                    id="input-with-icon-textfield"
                    placeholder="Поиск по Твиттер"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                />

                <Tags classes={classes}/>
                <RandomUsers classes={classes}/>
                
            </Grid>
        </Grid>
    )
}

export default Home;
