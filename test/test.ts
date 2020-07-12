import { assert } from 'chai';
import axios from 'axios';

import * as musicMetadata from 'music-metadata';

import * as audioTestData from '../lib';

describe('Audio test files', function() {

  this.timeout(30 * 1000);

  async function testTracks(album: audioTestData.IAlbum) {
    axios.defaults.baseURL = audioTestData.baseUrl;

    for (const track of album.tracks) {
      const path =
        '/' + encodeURI(album.folder) +
        '/' + encodeURI(track.track);

      const response = await axios.get(path, {
        responseType: 'stream',
        maxRedirects: 0 // no redirects will be followed
      });
      assert.strictEqual(200, response.status);
      assert.strictEqual(response.headers['access-control-allow-origin'], '*');
      assert.strictEqual(response.headers['access-control-allow-methods'], 'GET,HEAD,OPTIONS');
      assert.strictEqual(response.headers['content-type'], album.contentType);
      assert.isDefined(response.headers['content-length']);

      const {format, common} = await musicMetadata.parseStream(response.data);
      assert.strictEqual(format.duration, track.duration, `duration track ${album.folder} - ${track.track}`);
      assert.strictEqual(common.title, track.metadata.title, `metadata.title ${album.folder} - ${track.track}`);
      assert.strictEqual(common.artist, track.metadata.artist, `metadata.artist ${album.folder} - ${track.track}`);
    }
  }

  it('Various Artists - 2008 - netBloc Vol 13 - Color in a World of Monochrome [AAC-40]', async () => {
    await testTracks(audioTestData.netBlocVol13);
  });

  it('Various Artists - 2009 - netBloc Vol 24_ tiuqottigeloot [MP3-V2]', async () => {
    await testTracks(audioTestData.netBlocVol24);
  });

});
