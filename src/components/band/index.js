
import Main from '../../layouts/main';
import React from 'react';

function Band() {
    return (
        <Main>
            <div className="row">
                <div className="col-sm">
                        <img alt="The Band Changed"
                            className="band-pic"
                             src="/images/the-band-changed.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    Photos Courtesty of Flair Photography, Winchester, VA
                </div>
            </div>
            <div className="row">
                <div className="col-sm goodbye">
                  <p>
                    These last 5 years have been such a wonderful adventure. As our lives and priorities to family, community and work are rapidly shifting, we have made the difficult decision to bring this chapter of "The Band- Changed" to a close. While change can be tough, it also helps us grow.
                  </p>
                  <p>
                    With that being said, we hope you will join us on July 26th at 6 pm for our final show together at the Bright Box Theater in downtown Winchester. 
                    We will all continue to play, sing and write to further our love of music and our message.
                  </p>
                  <p>
                    We cannot tell you enough how blessed we are for all of the opportunities we have been given and the precious time we had together. Our memories as a band and our time sharing them with you will forever stay with each of us. Thank you for all of the love and support you have shown us throughout the years. We love you all.
                    </p>
                </div>
            </div>
        </Main>
    );
}

export default Band;
