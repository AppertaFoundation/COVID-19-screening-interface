import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Box,
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import uniqid from 'uniqid';
import { NavContext } from '../../../core/context/NavContext';
// import useApiRequest from '../../../core/hooks/useApiRequest';
// import { FAMILY_LIST } from '../../../config';
import { FAMILY_LIST } from '../../../fakeData';
import Card from '../../Components/Card';
import { Transition } from '../../Components/Dialog';
import Button from '../../Components/Button';

export default () => {
    const history = useHistory();
    const { setHistory } = useContext(NavContext);
    const [open, setOpen] = useState(false);
    const [subtitileText, setSubtitileText] = useState('');
    const [person, setPerson] = useState();
    /** TODO 
     * req handling with server side uncoment when the backend will be 
     * 
     */

    // const [{ response, loading, error }, makeRequest] = useApiRequest(
    //     FAMILY_LIST,
    //     {
    //         verb: 'get'
    //     }
    // );

    useEffect(() => {
        // makeRequest()
        setHistory(history);
    });

    // if (loading) {
    //     return <p>Loading...</p>
    // }
    // if (error) {
    //     return <p>{error}</p>
    // }
    const handleOpen = (e, text, identifier) => {
        setSubtitileText(text);
        setPerson(identifier);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const handleRedirect = (e, path) => {
        history.push(`/${path}/${person}`);
    };
    return (

        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>
                    <Grid
                        container
                        direction='column'
                        justify='center'
                        alignContent='center'
                    >
                        <Grid item>
                            <Typography align='center'>New Care Event for</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center'>{subtitileText}</Typography>
                        </Grid>
                    </Grid>
                </DialogTitle>

                <DialogContent>
                    <Box pb={2}>
                        <Grid
                            container
                            direction="column"
                            justify="space-around"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <Button color='primmary' onClick={(e) => handleRedirect(e, 'assesment')} variant='outlined'>Assesment</Button>
                            </Grid>
                            <Grid item>
                                <Button color='primmary' onClick={(e) => handleRedirect(e, 'intervention')} variant='outlined'>Intervention</Button>
                            </Grid>
                            <Grid item>
                                <Button color='primmary' onClick={(e) => handleRedirect(e, 'monitoring')} variant='outlined'>Monitoring</Button>
                            </Grid>
                        </Grid>
                    </Box>

                </DialogContent>
            </Dialog>
            <Box m={1}>
                {FAMILY_LIST.map(item => {
                    const { name, surname, middele, id } = item;
                    const subttitle = `${surname} ${name} ${middele}`;
                    const key = uniqid();
                    return <Card
                        key={key}
                        action={
                            <IconButton onClick={(e) => handleOpen(e, subttitle, id)}>
                                <MoreVertIcon name={item.id} />
                            </IconButton>
                        }
                    />;

                }
                )}
            </Box>
        </>
    );
};
