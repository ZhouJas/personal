import './topBar.scss'
import {Brightness4, Brightness7} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export default function TopBar(props: { theme: string; themeToggler: any}) {
    const handleOnClick = () => {
        props.themeToggler();
    }
    return (
        <div className='topBar'>
            <div className='wrapper'>
            <div className='left'>
                <div className='name'>
                    <a href="#intro">Jason Zhou</a>
                </div>
            </div>
            <div className='right'>
                <div className='settings'>
                    <IconButton onClick={handleOnClick}>
                    {props.theme === 'dark' ? <Brightness7 className='icon' fontSize="large"/> : <Brightness4 className='icon' fontSize="large"/>}
                    </IconButton>
                </div>
            </div>

            </div>

        </div>
    )
}
