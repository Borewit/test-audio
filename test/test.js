const {assert} = require('chai');
const axios = require('axios').default;

// const baseUrl = 'https://test-audio.netlify.com';
const baseUrl = 'https://test-audio.netlify.app';

const tracks = [
  '01 - Diablo Swing Orchestra - Heroines.mp3',
  '02 - Eclectek - We Are Going To Eclecfunk Your Ass.mp3',
  '03 - Auto-Pilot - Seventeen.mp3',
  '04 - Muha - Microphone.mp3',
  '05 - Just Plain Ant - Stumble.mp3',
  '06 - Sleaze - God Damn.mp3',
  '07 - Juanitos - Hola Hola Bossa Nova.mp3',
  '08 - Entertainment For The Braindead - Resolutions (Chris Summer Remix).mp3',
  '09 - Nobara Hayakawa - Trail.mp3',
  '10 - Paper Navy - Tongue Tied.mp3',
  '11 - 60 Tigres - Garage.mp3',
  '12 - CM aka Creative - The Cycle (Featuring Mista Mista).mp3'
];

describe('Audio test files', function () {

  it('download', async () => {

    axios.defaults.baseURL = baseUrl;

    for(const trackName of tracks) { // .filter((track, i) => { return i === 0; })) {
      const path =
        '/' + encodeURI('Various Artists - 2009 - netBloc Vol 24_ tiuqottigeloot [MP3-V2]') +
        '/' + encodeURI(trackName);

      console.log(`Download: ${path}...`);

      await axios.get(path, {
        responseType: 'stream',
        maxRedirects: 0 // no redirects will be followed
      })
        .then(response => {
          assert.strictEqual(200, response.status);
          assert.strictEqual(response.headers['access-control-allow-origin'], '*');
          assert.strictEqual(response.headers['access-control-allow-methods'], 'GET,HEAD,OPTIONS');
          assert.strictEqual(response.headers['content-type'], 'audio/mpeg');
          assert.isDefined(response.headers['content-length']);
        }).catch(err => {
          err = err;
        });
    }

  });

});
