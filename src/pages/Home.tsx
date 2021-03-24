import React, { useEffect } from 'react';
import {
    Typography,
    InputAdornment,
    Divider,
    IconButton,
    TextField,
    Avatar,
    Button,
    TextareaAutosize,
    Hidden,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    CircularProgress,
    Grid,
    Box
} from '@material-ui/core';

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
import { TweetForm } from '../components/TweetForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actionCreatores';
import { selectIsTweetsLoading, selectTweets, selectTweetsItems } from '../store/ducks/tweets/selectors';
import { ModalBlock } from '../components/Modal';
import { fetchTags } from '../store/tags/actionCreatores';



export const Home = (): JSX.Element => {
    const classes = useStylesHome();
    const classesSignIn = useStylesSignIn();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch])
    
    return (
        <Grid className={classes.fsd} container spacing={2}>
            <Grid className={classes.sideBarWrapp} item xs={3}>
                <div>
                    <TwitterIcon className={classes.sideBarLogo}/>
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
                        <TweetForm classes={classes}/>
                    </ModalBlock>
                </div>

                <ListItem className={classes.sideBarUserInfo}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </Grid>
            <Grid className={classes.contentWrap} item xs={6}>
                <div className={classes.mainTitle}>
                    <Typography variant="h6">Головна</Typography>
                </div>

                <div className={classes.tweetsWrap}>
                    <TweetForm classes={classes}/>
                    {
                        isLoading ? <div className={classes.tweetsLoading}><CircularProgress/></div> : 
                        tweets.map(tweet => (
                            <Tweet key={tweet._id} text={tweet.text} user={tweet.user}/>
                        ))
                    }
                    
                </div>


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

                <List className={classes.trendsList}>
                    <ListItem className={classes.trendsListTitle}>
                        <ListItemText primary="Кого читать" />
                    </ListItem>

                    <Divider light/>

                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                        </ListItemAvatar>
                        <ListItemText className={classes.trendsListText} primary="Photos" secondary="Jan 9, 2014" />
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.whoFollowBtn}>
                            Читать
                        </Button>
                    </ListItem>

                    <Divider light/>

                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                        </ListItemAvatar>
                        <ListItemText className={classes.trendsListText} primary="Work" secondary="Jan 7, 2014" />
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.whoFollowBtn}>
                            Читать
                        </Button>
                    </ListItem>

                    <Divider light/>

                    <ListItem className={classes.trendsListShowMore} button>
                        <ListItemText primary="Показать больше" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Home
