import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsItems } from '../store/ducks/tweet/selectors';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actionCreatores';
import { useParams } from "react-router-dom";

import { IconButton, Avatar, Typography, Divider } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';
import { useStylesFullTweet } from '../style';
import { Route } from 'react-router-dom';

export const FullTweet: React.FC = (): JSX.Element => {
    const classes = useStylesFullTweet();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetsItems);
    
    const params: { any: string } = useParams()
    const id = params.any;

    useEffect(() => {
        

        dispatch(fetchTweetData(id));

        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [dispatch])
    



    return (
        <>
        {tweetData && 
            <div className={classes.tweet}>
                <div>
                    <div className={classes.dFlex}>
                        <Avatar className={classes.userAvatar} alt="Remy Sharp" src={tweetData.user?.avatarUrl} />
                        <div>
                            <Typography variant="h6" className={classes.tweetUserName}>
                            <b>{tweetData.user.fullname}</b>
                            {tweetData.user.username}
                            </Typography>
                        </div>
                    </div>
                    
                    <Typography className={classes.tweetContent} variant="h6">
                        {tweetData.text}
                    </Typography>
                </div>

                <Typography className={classes.tweetDate}>12:15 PM · Mar 27, 2021</Typography>
                
                <Divider className={classes.tweetDivider}/>

                <Typography className={classes.tweetLikesCount} variant="h6">
                    <b>8</b> Likes
                </Typography>

                <Divider className={classes.tweetDivider}/>

                <div className={classes.tweetBtns}>
                    <IconButton>
                        <ChatBubbleOutlineIcon/>
                    </IconButton>
                    <IconButton>
                        <RepeatSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon/>
                    </IconButton>
                    <IconButton>
                        <ReplyIcon/>
                    </IconButton>
                    
                </div>
            </div>
        }
        </>

    )
}