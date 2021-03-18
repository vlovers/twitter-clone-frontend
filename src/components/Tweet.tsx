import React from 'react'
import { IconButton, Avatar, Typography } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';

export const useStylesHome = makeStyles({
    wrpper: {
        display: "flex",
        height: "100vh"
    },
    dFlex: {
        display: "flex"
    },
    tweet: {
        border: "0.5px solid #2f3336",
        borderBottom: "none", 
        padding: 20,
        paddingBottom: 0,

    },
    tweetUserName: {
        fontSize: 15,
        marginLeft: 20,
        marginBottom: 3,

        color: "rgb(110, 118, 125)",
        "& b": {
            color: "#ffffff",
            marginRight: 7,

        }
    },
    tweetContent: {
        color: "#ffffff",
        fontSize: 15,
        marginLeft: 20,
        lineHeight: 1.3
        
    },
    tweetBtns: {
        marginLeft: 46,
        marginTop: 0,

        display: "flex",
        justifyContent: "space-between",
        maxWidth: "425px",
        "& button:hover": {
            
        },
        "& svg": {
            color: "#ffffff",
            opacity: 0.5,
            fontSize: 19,

        }
    }
  });

export const Tweet = () => {
    const classes = useStylesHome();

    return (
        <div className={classes.tweet}>
            <div className={classes.dFlex}>
                <div>
                    <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                </div>
                <div>
                    <div>
                    <Typography variant="h6" className={classes.tweetUserName}>
                    <b>zAr</b>
                    @Severenit · 1h
                    </Typography>
                

                    </div>
                    <Typography className={classes.tweetContent} variant="h6">
                        Через пару дней будет самый большой и громкий анонс от меня))) явно вы такого не ожидаете)))
                        Ну а пока можно порассуждать какой))
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
