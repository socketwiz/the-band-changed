
import Main from '../../layouts/main';
import React from 'react';

function Band() {
    return (
        <Main>
            <div className="row">
                <div className="col-sm">
                    <div className="band-pic-caption">
                        <p>2 Cor. 5:17</p>
                        <p>
                            If anyone is in Christ, he is a new creation;
                            old things have passed away; behold, all things have become new...
                        </p>
                    </div>
                        <img alt="The Band Changed"
                            className="band-pic"
                            src="/images/the-band-changed.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm photo-courtesy">
                    Photos Courtesty of Flair Photography, Winchester, VA
                </div>
            </div>
        </Main>
    );
}

export default Band;
