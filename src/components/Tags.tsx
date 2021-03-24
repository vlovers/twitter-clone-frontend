import React from 'react'
import { IconButton, Avatar, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';
import { useStylesHome, useStylesTweet } from '../style';
import { useSelector } from 'react-redux';
import { selectIsTagsLoaded, selectTagsItems } from '../store/tags/selectors';


interface TagsProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const Tags: React.FC<TagsProps> = ({ classes }) => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);
    console.log(items);
    

    return (
        <List className={classes.trendsList}>
            {items.map(tag => (
                <>
                    <ListItem className={classes.trendsListTitle}>
                        <ListItemText className={classes.trendsListText} primary={tag.name} />
                    </ListItem>
                    <Divider light/>
                </> 
            ))}
            <ListItem className={classes.trendsListShowMore} button>
                <ListItemText className={classes.trendsListText} primary="Показать больше" />
            </ListItem>
        </List>
    )
}
