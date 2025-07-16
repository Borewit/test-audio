import { assert } from 'chai';
import {parseWebStream} from 'music-metadata';
import * as audioTestData from '../lib/index.js';

describe('Audio test files', function() {

  this.timeout(30 * 1000);

  async function testTracks(album: audioTestData.IAlbum) {

    for (const track of album.tracks) {
      const path =
        '/' + encodeURI(album.folder) +
        '/' + encodeURI(track.track);

      const response = await fetch(audioTestData.baseUrl + path, {
        redirect: 'manual' // no redirects will be followed
      });

      assert.strictEqual(200, response.status);
      assert.strictEqual(response.headers.get('Access-Control-Allow-Origin'), '*', 'HTTP header "Access-Control-Allow-Origin"');
      assert.strictEqual(response.headers.get('Access-Control-Allow-Methods'), 'GET,HEAD,OPTIONS', 'HTTP header "Access-Control-Allow-Methods"');
      assert.strictEqual(response.headers.get('Content-Type'), album.contentType, 'HTTP header "Content-Type"');
      assert.isDefined(response.headers.get('Content-Length'), 'HTTP header "Content-Length"');

      assert.isDefined(response.body, 'response.body');
      if (response.body !== null) {
        const {format, common} = await parseWebStream(response.body);
        assert.strictEqual(format.duration, track.duration, `duration track ${album.folder} - ${track.track}`);
        assert.strictEqual(common.title, track.metadata.title, `metadata.title ${album.folder} - ${track.track}`);
        assert.strictEqual(common.artist, track.metadata.artist, `metadata.artist ${album.folder} - ${track.track}`);
      }

    }
  }

  it('Various Artists - 2008 - netBloc Vol 13 - Color in a World of Monochrome [AAC-40]', async () => {
    await testTracks(audioTestData.netBlocVol13);
  });

  it('Various Artists - 2009 - netBloc Vol 24_ tiuqottigeloot [MP3-V2]', async () => {
    await testTracks(audioTestData.netBlocVol24);
  });

});
