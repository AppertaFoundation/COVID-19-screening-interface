import React from "react";
import {
    CardContent,
    CardHeader,
    Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    card: {
        width: "100%",
        minHeight: "100%",
        marginBottom: "0.5em",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: "#fff"
    }
}));

export default ({
    title = "title",
    subheader = "subheader",
    content,
    action
}) => {
    const classes = useStyles();
    return (
        <Box
            boxShadow={2}
            className={classes.card}
        >
            <CardHeader title={title} subheader={subheader} action={action} />
            <CardContent>
                {content}
            </CardContent>
        </Box>
    );
};
