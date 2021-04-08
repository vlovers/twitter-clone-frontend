import React, { useEffect } from 'react'
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectRandomUsersItems, selectRandomUsersState } from '../store/ducks/randomUsers/selectors'
import { useStylesHome } from '../style'
import { selectIsAuth } from '../store/ducks/user/selectors'
import { useHistory } from 'react-router-dom'

interface RandomUsersProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const RandomUsers: React.FC<RandomUsersProps> = ({ classes }: RandomUsersProps): React.ReactElement => {
    const users = useSelector(selectRandomUsersItems);
    

    return (
        <List className={classes.trendsList}>
            <ListItem className={classes.trendsListTitle}>
                <ListItemText primary="Кого читать" />
            </ListItem>

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
    )
}
