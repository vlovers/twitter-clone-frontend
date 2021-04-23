import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import { useStylesHome } from '../style';
import { User } from '../store/ducks/user/contracts/state';
import { setLogOut } from '../store/ducks/user/actionCreatores';

interface SideUserInfoProps {
    classes: ReturnType<typeof useStylesHome>;
    userData: User | undefined
}

const SideUserInfo: React.FC<SideUserInfoProps> = ({classes, userData }) => {
    const dispatch = useDispatch();
    const [hidenModal, setHidenModal] = useState(true)

    const onLogOut = () => {
        dispatch(setLogOut());
        window.localStorage.removeItem('token')
    }
    
    return (
        <div>
            <List hidden={hidenModal} component="nav" aria-label="secondary mailbox folder" className={classes.sideBarUserInfoModal}>
                <ListItem className={classes.sideBarUserInfo}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={userData?.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={userData?.fullname}secondary={`@${userData?.username}`} />
                </ListItem>
                <Divider className={classes.sideBarUserInfoModalDivider}/>
                <ListItem button className={classes.sideBarUserInfoModalItem}>
                <ListItemText primary="Trash" />
                </ListItem >
                <Divider className={classes.sideBarUserInfoModalDivider}/>
                <ListItem button  className={classes.sideBarUserInfoModalItem}>
                <ListItemText onClick={onLogOut} primary={`Log out @${userData?.username}`} />
                </ListItem>
            </List>


            <Button className={classes.sideUserProfile} onClick={() => setHidenModal(!hidenModal)}>
                <ListItem className={classes.sideBarUserInfo}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={userData?.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={userData?.fullname} secondary={`@${userData?.username}`} />
                </ListItem>

                <MoreHorizIcon/>
            </Button>
        </div>

    )
}

export default SideUserInfo;

