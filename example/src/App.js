import React from 'react';

import ShowMoreText from '../../lib/ShowMoreText';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myProgress: 25,
    };
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  render() {
    return (
      <div>
        <div>
          <p style={{ display: 'inline' }}>Some text with mentions </p>
          <a style={{ display: 'inline' }} href="/profile/fbe2a15c-617d-4ed8-b91f-4ac8f363750f">
            Tom Schroeder
          </a>
          <p style={{ display: 'inline' }}> and with tags </p>
          <a style={{ display: 'inline' }} href="#">
            #wes_pickled_eum
          </a>
          <p style={{ display: 'inline' }}> </p>
          <a style={{ display: 'inline' }} href="#">
            #rem_vice_laquita
          </a>
          <p style={{ display: 'inline' }}> </p>
          <a style={{ display: 'inline' }} href="#">
            #dreamcatcher_katheryn_quo
          </a>
        </div>
        <ShowMoreText
          /* Default options */
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass=""
          onClick={this.executeOnClick}
          expanded={false}
        >
          <p>Some text with mentions </p>
          <a href="/profile/fbe2a15c-617d-4ed8-b91f-4ac8f363750f">Tom Schroeder</a>
          <p> and with tags </p>
          <a href="#">#wes_pickled_eum</a>
          <p> </p>
          <a href="#">#rem_vice_laquita</a>
          <p> </p>
          <a href="#">#dreamcatcher_katheryn_quo</a>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur{' '}
            <a href="https://www.yahoo.com/" rel="noopener noreferrer" target="_blank">
              yahoo.com
            </a>{' '}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,{' '}
            <a href="https://www.google.bg/" title="Google" rel="nofollow" rel="noopener noreferrer" target="_blank">
              www.google.bg
            </a>{' '} */}
          {/* quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore */}
          {/* </p> */}
          {/* 
          <p>
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>

          <p>
            ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
          </p>

          <p>
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>

          <p>
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex
          </p> */}
        </ShowMoreText>
      </div>
    );
  }
}
