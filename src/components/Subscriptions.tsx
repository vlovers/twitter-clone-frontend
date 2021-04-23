import React from 'react'
import { IconButton, Avatar, Typography, Paper, Tabs, Button, ListItem, ListItemText, ListItemAvatar, Divider, List, Tab } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplyIcon from '@material-ui/icons/Reply';
import { useStylesHome, useStylesTweet } from '../style';
import { formatDate } from '../utils/formatDate';

interface SubscriptionsProps {
    _id: string,
    text: string;
    createdAt: string,
    images: any,
    user: {
        fullname: string;
        username: string;
        avatar: string;
        followers: string[];
        following: string[];

    },
}

export const Subscriptions: React.FC<SubscriptionsProps> = ({user }: SubscriptionsProps) => {
    const classes = useStylesHome();
    
    const onLike = () => {
        
    }

    const [value, setValue] = React.useState(2);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
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

            <List className={classes.trendsList}>

            {/* {users.map(user => (
                <>
                    <Divider light/>
                            
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={user.avatarUrl} />
                        </ListItemAvatar>
                        <ListItemText className={classes.trendsListText} primary={user.fullname} secondary={user.username} />
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.whoFollowBtn}>
                            Читать
                        </Button>
                    </ListItem>
                </>
            ))} */}
            


            {
                user.followers.map(follower => {
                    <ListItem button>
                        <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                        </ListItemAvatar>
                        <div>
                            <ListItemText className={classes.trendsListText} primary="Work" secondary="Jan 7, 2014" />
                            <Button
                                variant="outlined"
                                color="secondary"
                                className={classes.whoFollowBtn}>
                                Читать
                            </Button>
                        </div>
                    </ListItem>
                })
            }
            

            <Divider light/>
        </List>
            
        </div>
    )
}