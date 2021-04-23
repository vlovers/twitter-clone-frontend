import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

//@ts-nocheck

export const theme = createMuiTheme({
    typography: {
        // fontFamily: [
        //     'system-ui',
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     'Segoe UI',
        //     'Roboto',
        //     'Ubuntu',
        //     'sans-serif',
        //     'Helvetica Neue'
        // ]
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(26, 145, 218)',
            contrastText: '#ffffff'
        },
        secondary: {
            main: 'rgb(26, 145, 218)'
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#ffffff"
        }
    },
    // shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20
            },
            outlinedPrimary: {
                borderColor: 'rgb(29, 161, 243)'
            },
        },
        MuiInputLabel: {
            root: {
              color: "#fff",
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px'
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px'
                }
            },
            input: {
                backgroundColor: 'transparent',
                border: "1px solid #2f3336",
                "&:hover": {
                    border: "1px solid #2f3336",
                }

            }
        },
        
        MuiDialog: {
            paper: {
                borderRadius: 15
            }
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8
            }
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(245, 248, 250)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800
                },
                '& button': {
                    padding: 8,
                    marginRight: 20
                }
            }
        }
    }
    
});
