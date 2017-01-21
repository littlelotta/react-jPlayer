/* eslint react/prop-types: 0 */
import React from 'react';

import { JPlayer, Gui, Progress, SeekBar, Buffer, BrowserUnsupported,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat, PlaybackRateBar,
  VolumeBar, Duration,
  CurrentTime } from '../../../src/index';
import mp3 from '../../assets/Alan Walker - Fade.mp3';
import poster from '../../assets/Alan Walker - Fade.jpg';
import jPlayerConnect from '../../../src/connect';
import StatusWrapper from '../helpers/statusWrapper';

const AudioPlayer = props => (
  <StatusWrapper title="Audio Player" id={props.id}>
    <JPlayer data-type="jp-default">
      <Gui>
        <Audio>
          <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
        </Audio>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
        <div className="jp-controls">
          <Play><i className="fa">{/* Icon set in css*/}</i></Play>
          <FullScreen><i className="fa fa-expand" /></FullScreen>
          <Repeat><i className="fa fa-repeat" /></Repeat>
          <PlaybackRateBar />
          <div className="jp-volume-controls">
            <Mute><i className="fa">{/* Icon set in css*/}</i></Mute>
            <VolumeBar />
          </div>
          <Progress>
            <SeekBar>
              <PlayBar />
              <Buffer />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </Progress>
        </div>
      </Gui>
      <BrowserUnsupported />
    </JPlayer>
  </StatusWrapper>
);

export const audioOptions = {
  id: 'audio-player',
  muted: true,
  keyEnabled: true,
  media: {
    title: 'Fade',
    artist: 'Alan Walker',
    sources: {
      mp3,
    },
    poster,
    free: true,
  },
};

export default jPlayerConnect(AudioPlayer, audioOptions.id);

/*
onShuffleClick = (event) => {
    event.preventDefault();

    this.context.shuffle(!this.props.shuffled);
    this.context.blur(event.target);
}
onPreviousClick = (event) => {
    event.preventDefault();

    this.context.previous();
    this.context.blur(event.target);
}
onNextClick = (event) => {
    event.preventDefault();

    this.context.next();
    this.context.blur(event.target);
}
onVideoPlayClick = () => this.props.dispatch(play())
shuffle: (<a className={classes.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
previous: (<a className={classes.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
next: (<a className={classes.NEXT} onClick={props.onNextClick}>{props.children}</a>);
*/