const {assert} = require('chai');
const axios = require('axios').default;

const baseUrl = 'https://test-audio.netlify.app';

const netBlocVol13 = {
  folder: 'Various Artists - 2008 - netBloc Vol 13 - Color in a World of Monochrome [AAC-40]',
  tracks: [
    '1.01. Sweet Man Like Me.m4a',
    '1.02. Solid Ground.m4a',
    '1.03. H.E.C.T.O.R..m4a',
    '1.04. All You\'ve Never Felt.m4a',
    '1.05. Nicht allein.m4a',
    '1.06. Papayobahay.m4a',
    '1.07. Cairn.m4a',
    '1.08. Stalker.m4a',
    '1.09. Que le hip-hop renaisse.m4a',
    '1.10. Reward le fin.m4a'
  ],
  contentType: 'audio/mp4'
};

const netBlocVol24 = {
  folder: 'Various Artists - 2009 - netBloc Vol 24_ tiuqottigeloot [MP3-V2]',
  tracks: [
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
  ],
  contentType: 'audio/mpeg'
};

describe('Audio test files', function () {

  async function testTracks(album) {
    axios.defaults.baseURL = baseUrl;

    for(const trackName of album.tracks) { // .filter((track, i) => { return i === 0; })) {
      const path =
        '/' + encodeURI(album.folder) +
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
          assert.strictEqual(response.headers['content-type'], album.contentType);
          assert.isDefined(response.headers['content-length']);
        });
    }
  }

  it('Various Artists - 2008 - netBloc Vol 13 - Color in a World of Monochrome [AAC-40]', async () => {
    await testTracks(netBlocVol13);
  });

  it('Various Artists - 2009 - netBloc Vol 24_ tiuqottigeloot [MP3-V2]', async () => {
    await testTracks(netBlocVol24);
  });

});
