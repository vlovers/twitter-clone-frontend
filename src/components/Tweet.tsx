import React from 'react'
import { IconButton, Avatar, Typography } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';
import { useStylesTweet } from '../style';


interface TweetProps {
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export const Tweet: React.FC<TweetProps> = ({ text, user }: TweetProps) => {
    const classes = useStylesTweet();

    return (
        <div className={classes.tweet}>
            <div className={classes.dFlex}>
                <div>
                    <Avatar alt="Remy Sharp" src={user?.avatarUrl} />
                    <Avatar alt="Remy Sharp" src={user?.avatarUrl} />
                </div>
                <div>
                    <div>
                    <Typography variant="h6" className={classes.tweetUserName}>
                    <b>{user.fullname}</b>
                    {user.username} · 1h
                    </Typography>
                

                    </div>
                    <Typography className={classes.tweetContent} variant="h6">
                        {text}
                    </Typography>
                </div>
            </div>
            <div className={classes.tweetBtns}>
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
                <IconButton>
                    <RepeatSharpIcon/>
                </IconButton>
                <IconButton>
                    <ChatBubbleOutlineIcon/>
                </IconButton>
                <IconButton>
                    <ReplyIcon/>
                </IconButton>
                
            </div>
        </div>
    )
}