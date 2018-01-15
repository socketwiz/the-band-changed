
import Main from '../../layouts/main';
import React from 'react';

function Media() {
    return (
        <Main>
            <h1 className="title">Videos & Music</h1>
            <iframe
                allowFullScreen="allowfullscreen"
                className="youtube"
                frameBorder="0"
                src="//www.youtube.com/embed/sHhTnNCgRhY?feature=oembed&amp;wmode=opaque&amp;theme=dark&amp;showinfo=1&amp;autoplay=0" // eslint-disable-line max-len
                title="Gotta Serve Somebody">
            </iframe>

            <div className="row livin-not-to-die">
                <div className="col-sm-8 col-md-5 col-lg-5">
                    <img alt="Livin' Not to Die Cover"
                        className="livin-not-to-die-cover"
                        src="/images/livin-not-to-die-cover.jpg" />
                </div>
                <div className="col-sm-4 col-md-7 col-lg-7">
                    <div className="name">Livin&#39; Not to Die</div>
                    <div className="author">by The Band-Changed</div>
                    <div className="length">Length 3:58</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <audio controls className="livin-not-to-die-player">
                        <source
                            src="/media/livin-not-to-die.mp3"
                            type="audio/mpeg" />
                        Your browser does not support HTML5 audio
                    </audio>
                </div>
            </div>
        </Main>
    );
}

export default Media;
