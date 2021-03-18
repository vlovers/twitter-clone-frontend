import React from 'react';
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

    return (
        <div className={classes.tweetForm}>
            <div className={classes.dFlex}>
                <div>
                    <Avatar alt="Remy Sharp" src="https://readmyanswers.com/wp-content/uploads/2018/02/8.-Lob-Cut-e1517864818433.jpg" />
                </div>
                <div className={classes.tweetFormInput}>
                    <TextareaAutosize placeholder="Что происходит?"/>
                </div>
            </div>
            <Divider light/>
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
                    <Box className={classes.tweetFormProgress} position="relative" display="inline-flex">
                        <CircularProgress className={classes.tweetFormProgressBg} variant="determinate" value={100} />
                        <CircularProgress className={classes.tweetFormProgressMn} value={50} variant="determinate" />
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
                            <Hidden>
                                <Typography 
                                    className={classes.tweetFormProgressText} 
                                    variant="caption" 
                                    component="div" 
                                    color="textSecondary">
                                    80
                                </Typography>
                            </Hidden>
                        </Box>
                    </Box>
                        
                    <div className={classes.tweetFormLine}></div>

                    <IconButton
                        className={classes.tweetFormAddSecond} 
                        color="primary" 
                        aria-label="add to shopping cart">
                        <AddIcon />
                    </IconButton>

                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.tweetFormSend}>
                        Твитнуть
                    </Button>
                </div>
                
            </div>
        </div>
    )
}
