import React from 'react'
import './topBar.scss'
import {Brightness4} from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className='topBar'>
            <div className='wrapper'>
            <div className='left'>
                <div className='name'>
                    <a href="#intro">Jason Zhou</a>
                </div>
            </div>
            <div className='right'>
                {/* <div className='settings'>
                    <Brightness4 fontSize="large"/>
                </div> */}
            </div>

            </div>

        </div>
    )
}
