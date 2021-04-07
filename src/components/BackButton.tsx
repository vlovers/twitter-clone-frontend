import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    }

    return (
        <IconButton 
            onClick={handleClickButton} 
            style={{ marginRight: 10, paddingLeft: 0  }} 
            color="primary">
            <ArrowBackIcon/>
        </IconButton>
    )
}
