import React, { useEffect } from 'react';
import {
    Typography,
    InputAdornment,
    TextField,
    Button,
    CircularProgress,
    Grid,
} from '@material-ui/core';

import { Twitter as TwitterIcon, Search as SearchIcon } from '@material-ui/icons';

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
import { selectUserState } from '../store/ducks/user/selectors';
import SideUserInfo from '../components/SideUserInfo';


const Home = (): JSX.Element => {
    const classes = useStylesHome();
    const classesSignIn = useStylesSignIn();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems)
    const user = useSelector(selectUserState)
    
    const userData = user && user?.data 

    const isLoading = useSelector(selectIsTweetsLoading)
    const [open, setOpen] = React.useState(false);  

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    console.log(user);
    

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch])

    
    
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
                        onClick={handleClickOpen}
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
                    
                    <Route exact path={["/home", "/home/search:any+"]}>
                        <Typography variant="h6">Головна</Typography>
                    </Route>
                    <Route path={"/home/tweet"} >
                        <div className={classes.dFlexAC} style={{height: 32}}>
                            <BackButton/>
                            <Typography variant="h6">Твитнуть</Typography>
                        </div>
                    </Route>
                </div>

                <Route exact path={["/home", "/home/search:any+"]}>
                    <div className={classes.tweetsWrap}>
                        <AddTweetForm classes={classes}/>
                        <div className={classes.addFormTweetDivider}/>
                        {
                            isLoading ? <div className={classes.tweetsLoading}><CircularProgress/></div> : 
                            tweets.map(tweet => (
                                <Link to={`/home/tweet/${tweet._id}`} style={{textDecoration: "none"}}>
                                    <Tweet key={tweet._id} {...tweet}/>
                                </Link>
                            ))
                        }
                        
                    </div>
                </Route>

                <Route exact path="/home/tweet/:any+">
                    <FullTweet/>
                </Route>
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

export default Home
