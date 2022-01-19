import { Box, Button, TextField } from '@mui/material';
import React, { Component } from 'react';
import './pages.css';

export class home extends Component {
    constructor(props) {
        super(props);

        // state values 0 = notLogged , 1 = LoggedInAccount, 2 = Started Listening
        this.state = { value: '0' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState(this.state);
    }

    changeState(state) {
        if (this.state.value !== state) {
            this.state.value = state;
        }
    }

    handleSubmit(e) {
        this.startClientMsgWorkerThread()
    }

    startClientMsgWorkerThread(username, password) {

    }

    render() {
            return (
                <div className='content'>
                    <h1 id='home'>Welcome to my React Projekt</h1>
                    <p>In this projekt we are going to create
                        a React Frontend and a Node.js Backend.</p>

                    <h2>Please Log in!</h2>

                    <div className='loginForm'>
                        <Box component="form" noValidate autoComplete="off" sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        >
                            <TextField id='outlined-basic' label='Username' variant='outlined' />
                            <TextField id='outlined-basic' label='Password' variant='outlined' />
                            <Button variant="outlined-basic" onClick={e => this.handleSubmit(e)}>LogIn</Button>
                        </Box>
                    </div>
                </div>
            )
    }
}

export default home
