import React, { Fragment } from 'react'
import { IconButton, Avatar, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

import { Link } from 'react-router-dom'
import { useStylesHome, useStylesTweet } from '../style';
import { useSelector } from 'react-redux';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';


interface TagsProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const Tags: React.FC<TagsProps> = ({ classes }) => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);
    console.log(items);
    
    return (
        <List className={classes.trendsList}>
            <ListItem className={classes.trendsListTitle}>
                <ListItemText className={classes.trendsListText} primary="Тренды для вас" />
            </ListItem>
            <Divider light/>
            {/* {items && items.map(tag => (
                <Link to={`/home/tweet/${tag._id}`} key={tag._id}>
                   <ListItem button>
                        <ListItemText className={classes.trendsListText} primary={tag.name} secondary={tag.count + " твитов"} />
                    </ListItem>
                    <Divider light/>
                </Link> 
            ))} */}
            <ListItem className={classes.trendsListShowMore} button>
                <ListItemText className={classes.trendsListText} primary="Показать больше" />
            </ListItem>
        </List>
    )
}
