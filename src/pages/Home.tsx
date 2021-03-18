import React from 'react';
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

import { useStylesHome } from '../style';
import { Tweet } from '../components/Tweet';
import { SideBar } from '../components/SideBar';
import { TweetForm } from '../components/TweetForm';



export const Home = () => {
    const classes = useStylesHome();


    return (
        <Grid className={classes.fsd} container spacing={2}>
            <Grid className={classes.sideBarWrapp} item xs={3}>
                <div>
                    <TwitterIcon className={classes.sideBarLogo}/>
                    <SideBar classes={classes}/>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.onTweetBtn}>
                        Твитнуть
                    </Button>
                </div>

                <ListItem className={classes.sideBarUserInfo}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </Grid>
            <Grid style={{maxHeight: "100%"}} item xs={6}>
                <div className={classes.mainTitle}>
                    <Typography variant="h6">Головна</Typography>
                </div>

                <div className={classes.tweetsWrap}>
                    <TweetForm classes={classes}/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
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

                <List className={classes.trendsList}>
                    <ListItem className={classes.trendsListTitle}>
                        <ListItemText className={classes.trendsListText} primary="Тренды для вас" />
                    </ListItem>
                    <Divider light/>
                    <ListItem button>
                        <ListItemText className={classes.trendsListText} primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <Divider light/>
                    <ListItem button>
                        <ListItemText  className={classes.trendsListText} primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider light/>
                    <ListItem button>
                        <ListItemText  className={classes.trendsListText} primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes.trendsListShowMore} button>
                        <ListItemText className={classes.trendsListText} primary="Показать больше" />
                    </ListItem>
                </List>

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
