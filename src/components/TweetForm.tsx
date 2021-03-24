import React, { useState } from 'react';
import { 
    Button,
    Avatar,
    TextareaAutosize,
    Divider,
    Box,
    CircularProgress,
    Typography,
    IconButton,
    Hidden
} from '@material-ui/core';


import {
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

interface TweetFormProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const TweetForm: React.FC<TweetFormProps> = ({
    classes,
}: TweetFormProps): React.ReactElement => {

    const [text, setText] = useState<string>("");
    const textLimitPercent = (text.length / 280) * 100;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget && text.length <= 280) {
            setText(e.currentTarget.value)

            
        }
        console.log(text.length);

    }

    

    return (
        <div className={classes.tweetForm}>
            <div className={classes.dFlex}>
                <div>
                    <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                </div>
                <div className={classes.tweetFormInput}>
                    <TextareaAutosize onChange={handleChangeTextarea} value={text} placeholder="Что происходит?"/>
                </div>
            </div>

            {text.length ? <Divider light/> : null}
            <div className={classes.dFlexSB}>
                <div className={classes.tweetFormBtns}>
                    <IconButton>
                        <PhotoOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <GifOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <SubjectOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <SentimentSatisfiedOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <EventNoteOutlinedIcon/>
                    </IconButton>
                </div>

                <div className={classes.tweetFormtweetFormProgressBtn}>
                    {text.length ? (
                        <>
                            <Box className={classes.tweetFormProgress} position="relative" display="inline-flex">
                                <CircularProgress 
                                    className={classes.tweetFormProgressBg} 
                                    variant="determinate" 
                                    value={100} 
                                    style={text.length >= 260 ? {marginRight: "-30px", width: "30px", height: "30px"} : {marginRight: "-20px",width: "20px", height: "20px"} } />
                                <CircularProgress 
                                    style={text.length >= 260 ? {color: "orange", width: "30px", height: "30px"} : {color: "rgb(29, 161, 242)", width: "20px", height: "20px"} } 
                                    className={classes.tweetFormProgressMn} 
                                    value={textLimitPercent} 
                                    variant="determinate" />
                                    <Box
                                        top={0}
                                        left={0}
                                        bottom={0}
                                        right={0}
                                        position="absolute"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography 
                                            className={classes.tweetFormProgressText} 
                                            variant="caption" 
                                            component="div" 
                                            color="textSecondary"
                                            >
                                            {text.length >= 260 ? (280 - text.length) : null}
                                        </Typography>
                                </Box>
                            </Box>
                            
                            <div className={classes.tweetFormLine}></div>

                            <IconButton
                                className={classes.tweetFormAddSecond} 
                                color="primary" 
                                aria-label="add to shopping cart">
                                <AddIcon />
                            </IconButton>
                        </>
                    ) : null}
                    

                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={text.length >= 280}
                        className={classes.tweetFormSend}>
                        Твитнуть
                    </Button>
                </div>
                
            </div>
        </div>
    )
}
