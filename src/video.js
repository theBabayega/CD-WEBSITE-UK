import React from 'react';
import ReactPlayer from 'react-player'
import './index.css'

class ResponsivePlayer extends React.Component {
    render() {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=iLUwx059yy8'
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    playing={true}
                />
            </div>
        )
    }
}
export default ResponsivePlayer;
