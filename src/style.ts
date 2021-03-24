import { makeStyles } from '@material-ui/core/styles';

export const useStylesHome = makeStyles({
    contentWrap: {
        border: "0.5px solid #2f3336",
        borderBottom: "none",
        maxHeight: "100%",
        padding: "0px !important"
    },
    wrpper: {
        display: "flex",
        height: "100vh"
    },
    dFlexSB: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,

        alignItems: "center",
    },
    dFlex: {
        display: "flex",
    },
    fsd: {
        width: 1260,
        margin: "0 auto",
        height: "100vh",
        maxHeight: "100%"

    },
    tweetsLoading: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 50
    },
    sideBarBtn: {
        fontWeight: 600,
        fontSize: 21,
        background: "transparent",
        paddingTop: 24,

        paddingBottom: 24,
        "&.active": {
            color: "rgba(29,161,242,1.00)"

        },
        "& svg": {
            fontSize: "27px !important",
            marginRight: 10,
            opacity: 0.9
        },
        "&:hover": {
            backgroundColor: "rgba(29, 161, 242, 0.1)",
            color: "rgba(29,161,242,1.00)"
        }
    },
    sideBarBtns: {
        padding: 0,
        "& li": {
            marginBottom: 10,
        }
    }, 
    onTweetBtn: {
        width: 220,
        height: 45,
        fontWeight: 600,
        marginTop: 12,

    },
    sideBarLogo: {
        color: "#fff",
        marginLeft: 12,
        fontSize: 32,

    },
    mainTitle: {
        borderBottom: "0.5px solid #2f3336",
        // borderBottom: "none",
        borderTop: "none", 

        padding: "10px 20px",

        "& h6": {
            fontWeight: 700,
            color: "#fff"
        }
    },
    tweetForm: {
        borderBottom: "0.5px solid #2f3336",
        margin: 0,
        padding: 20,
        paddingBottom: 0,
        "& > .MuiDivider-light": {
            backgroundColor: "rgb(117 117 117)",
            marginLeft: "auto",
            width: "90%"
        }
    },
    tweetFormInput: {
        marginLeft: 15,
        paddingBottom: 20,
        width: "98%",        

        "& textarea": {
            background: "transparent",
            border: "none",
            width: "100%",
            color: "#fff",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            marginTop: 5,
            fontSize: 20,
            resize: "none"

        },
        "& textarea::placeholder": {
            background: "transparent",
            border: "none",
            width: "100%",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: 20,
        },
        "& textarea:focus": {
            outlineOffset: "none",
            outline: "none",
        }
    },
    tweetFormBtns: {
        marginLeft: 50,

        display: "flex",
        justifyContent: "space-between",
        maxWidth: "425px",
        "& button": {
            padding: 5
        },
        "& svg": {
            color: "rgba(29,161,242,1.00)",
            fontSize: 25,

        }
    },
    tweetFormSend: {
        fontWeight: 700,
        "&.Mui-disabled" : {
            color: "#ffffff47",
            backgroundColor: "rgb(26 145 218 / 28%)"
        },
        
    },
    searchInput: {
        
        "& svg": {
            color: "#737477",
            border: "none",
        },
        "& > div": {


            "&::before": {
                width: 0,
            },
        },
        "& input": {
            background: "transparent",
            border: "none",
            width: "100%",
            color: "#fff",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            marginTop: 0,
            fontSize: 15,
            resize: "none"

        },
        "& input::placeholder": {
            background: "transparent",
            border: "none",
            width: "100%",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: 15,
        },
        "& .MuiInputBase-formControl.Mui-focused": {
            borderWidth: "2px",
            background: "#000",
            border: "1px solid rgb(25 145 218)",

            "& svg": {
                color: "rgb(25 145 218)",
                border: "none",
            },
        },

        "& .MuiInputBase-formControl": {
            background: "rgb(32 35 39)",
            boxSizing: "border-box",
            marginBottom: 20,
            borderRadius: 20,
            width: 350,
            height: 42,
            paddingLeft: 20,
            display: "flex",
            border: "1px solid transparent",
            justifyContent: "center",
        },


        "& .MuiInput-underline:after": {
            borderColor: "#fff",
            borderWidth: "2px",
            borderBottom: "none"

        },
    },
    trendsList: {
        background: "#15181c",
        padding: 0,
        marginBottom: 20,
        borderRadius: 15,
        width: 350,
        "& > .MuiDivider-light": {
            background: "rgb(47, 51, 54)"
        },
        "& > .MuiListItem-button:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.03)"
        }
    },
    trendsListText: {

        "& > span": {
            color: "#fff",
            fontWeight: 600,

        },
        "& > p": {
            color: "rgb(110, 118, 125)",
            fontSize: 13,

        },
    },
    trendsListTitle: {
        "& span": {
            fontWeight: 600,
            fontSize: 21,
            color: "#fff",

        },
       
    },
    trendsListShowMore: {
        paddingBottom: 9,
        paddingTop: 9,

        "& span": {
            fontSize: 15,
            fontWeight: 500,
            color: "rgba(29,161,242,1.00)"
        },
    },
    whoFollowBtn: {
        color: "rgba(29,161,242,1.00) !important",
        borderColor: "rgba(29,161,242,1.00) !important",
        fontSize: 13,
        fontWeight: 600,
        height: 35
    },
    tweetFormProgressText: {
        color: "rgb(110, 118, 125)",
        fontSize: 13,

        fontWeight: 400
    },
    tweetFormProgress: {
        marginRight: 10,

    },
    tweetFormProgressBg: {
        transition: "0.5s",
        color: "rgb(117 117 117)"
    },
    tweetFormProgressMn: {
        transition: "0.5s",
        color: "rgba(29,161,242,1.00)"

    },
    tweetFormtweetFormProgressBtn: {
        alignItems: "center",
        display: "flex"
    },
    tweetFormAddSecond: {
        border: "1px solid",
        borderRadius: "100%",
        height: 35,
        width: 35,
        marginRight: 10
    },
    tweetFormLine: {
        width: 1,
        height: 30,
        background: "rgb(61, 65, 69)",
        marginRight: 10
    },
    sideBarUserInfo: {
        "& span": {
            color: "#fff",
            fontWeight: 600,

        },
        "& p": {
            color: "rgb(110, 118, 125)",
            fontSize: 14,

        },
    },
    sideBarWrapp: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: "100%"
    },
    tweetsWrap: {
        maxHeight: "100%",
        overflowY: "scroll",
        height: "100%"
    },
    
});


export const useStylesSignIn = makeStyles({
    wrpper: {
        display: "flex",
        height: "100vh"
    },
    blueSide: {
        maxWidth: "55%",
        width: "100%",
        position: "relative",
        height: "100vh",
        "& img": {
            width: "100%",
            position: "absolute",
            maxWidth: "100%",
            height: "100vh",
            objectFit: "inherit"
        }
    },
    blueSideIcon: {
        color: "#fff",
        fontSize: "400px",
        transform: "translate(100%, 100%)",
        position: "absolute"
    },
    signSide: {
        paddingLeft: "36px",
        paddingRight: "200px",
        top: "50px",
        right: "50px",
        width: "45%",
        display: "flex",
        background: "#000",
        flexDirection: "column",
        justifyContent: "center"
    },
    signSideTitle: {
        fontSize: "65px",
        marginTop: "60px",
        marginBottom: "60px",
        fontWeight: 600,
        color: "rgb(217, 217, 217)",
        lineHeight: "65px"
    },
    signSidePretitle: {
        fontSize: "30px",
        fontWeight: 600,
        color: "rgb(217, 217, 217)",
        marginBottom: 32

    },
    signSideIcon: {
        color: "rgb(217, 217, 217);",
        fontSize: "50px"
    },
    signSideBtn: {
        fontWeight: 600,
        maxWidth: "380px",
        marginBottom: 20,
        padding: "21px 0"
    },
    modalBtn: {
        marginBottom: 20

    },
    modalBlock: {
        // background: "#000"
    },
    modalInput: {
        marginBottom: 20,
        color: "#fff",
        "& input": {
            color: "#fff",


        },
        "& input::placeholder": {
            color: "#fff",
        }
    },
    modalBlockContent: {
        width: 500,
        background: "#000"

    },
    modalBlockTitle: {
        background: "#000",
        "& h2": {
            color: "#fff",
            display: "flex",
            justifyContent: "space-between"
        }    
    },
    modalRegTextSecond: {
        color: "rgb(110, 118, 125)",
        fontWeight: 400,
        fontSize: 15

    },
    modalRegTextMain: {
        color: "rgb(255, 255, 255)",
        fontWeight: 600,
        fontSize: 17
    },
    modalRegSelect: {
        width: "100%"
    }
});


export const useStylesTweet = makeStyles({
    wrpper: {
        display: "flex",
        height: "100vh"
    },
    dFlex: {
        display: "flex"
    },
    tweet: {
        borderTop: "0.5px solid #2f3336",
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
