export const baseUrl = 'https://test-audio.netlify.app';

export interface IAlbum {
  folder: string;
  tracks: ITrack[];
  contentType: string;
}

export interface ITrack {
  track: string;
  duration: number;
  metadata: {
    title: string;
    artist: string;
  }
}

export interface IProvider {
  name: string,
  getUrl: (folder: string, track: ITrack) => string;
}

export const netBlocVol13: IAlbum = {
  folder: 'Various Artists - 2008 - netBloc Vol 13 - Color in a World of Monochrome [AAC-40]',
  tracks: [
    {
      track: '1.01. Sweet Man Like Me.m4a',
      duration: 274.9939229024943,
      metadata: {
        title: 'Sweet Man Like Me',
        artist: 'Nils Hoffmann'
      }
    }, {
      track: '1.02. Solid Ground.m4a',
      duration: 304.0885260770975,
      metadata: {
        title: 'Solid Ground',
        artist: 'Poxfil'
      }
    }, {
      track: '1.03. H.E.C.T.O.R..m4a',
      duration: 348.46185941043086,
      metadata: {
        title: 'H.E.C.T.O.R.',
        artist: 'Jamie Dull'
      }
    }, {
      track: '1.04. All You\'ve Never Felt.m4a',
      duration: 197.71791383219954,
      metadata: {
        title: 'All You\'ve Never Felt',
        artist: 'Fresh Body Shop'
      }
    }, {
      track: '1.05. Nicht allein.m4a',
      duration: 223.84036281179138,
      metadata: {
        title: 'Nicht allein',
        artist: 'Happy Elf'
      }
    }, {
      track: '1.06. Papayobahay.m4a',
      duration: 204.05696145124716,
      metadata: {
        title: 'Papayobahay',
        artist: 'April'
      }
    }, {
      track: '1.07. Cairn.m4a',
      duration: 315.675283446712,
      metadata: {
        title: 'Cairn',
        artist: 'William Fields'
      }
    }, {
      track: '1.08. Stalker.m4a',
      duration: 331.3951927437642,
      metadata: {
        title: 'Stalker',
        artist: 'You Are My Everything'
      }
    }, {
      track: '1.09. Que le hip-hop renaisse.m4a',
      duration: 184.0645804988662,
      metadata: {
        title: 'Que le hip-hop renaisse',
        artist: 'Empathik'
      }
    }, {
      track: '1.10. Reward le fin.m4a',
      duration: 175.4964172335601,
      metadata: {
        title: 'Reward le fin',
        artist: 'Mach FoX'
      }
    }
  ],
  contentType: 'audio/mp4'
};

export const netBlocVol24: IAlbum = {
  folder: 'Various Artists - 2009 - netBloc Vol 24_ tiuqottigeloot [MP3-V2]',
  tracks: [
    {
      track: '01 - Diablo Swing Orchestra - Heroines.mp3',
      duration: 322.5861224489796,
      metadata: {
        title: 'Heroines',
        artist: 'Diablo Swing Orchestra'
      }
    },
    {
      track: '02 - Eclectek - We Are Going To Eclecfunk Your Ass.mp3',
      duration: 190.0930612244898,
      metadata: {
        title: 'We Are Going to Eclecfunk Your Ass',
        artist: 'Eclectek'
      }
    },
    {
      track: '03 - Auto-Pilot - Seventeen.mp3',
      duration: 214.62204081632652,
      metadata: {
        title: 'Seventeen',
        artist: 'Auto-Pilot'
      }
    },
    {
      track: '04 - Muha - Microphone.mp3',
      duration: 181.83836734693878,
      metadata: {
        title: 'Microphone',
        artist: 'Muha'
      }
    },
    {
      track: '05 - Just Plain Ant - Stumble.mp3',
      duration: 86.0473469387755,
      metadata: {
        title: 'Stumble',
        artist: 'Just Plain Ant'
      }
    },
    {
      track: '06 - Sleaze - God Damn.mp3',
      duration: 226.79510204081632,
      metadata: {
        title: 'God Damn',
        artist: 'Sleaze'
      }
    },
    {
      track: '07 - Juanitos - Hola Hola Bossa Nova.mp3',
      duration: 207.0465306122449,
      metadata: {
        title: 'Hola Hola Bossa Nova',
        artist: 'Juanitos'
      }
    },
    {
      track: '08 - Entertainment For The Braindead - Resolutions (Chris Summer Remix).mp3',
      duration: 314.33142857142855,
      metadata: {
        title: 'Resolutions (Chris Summer remix)',
        artist: 'Entertainment for the Braindead'
      }
    },
    {
      track: '09 - Nobara Hayakawa - Trail.mp3',
      duration: 204.04244897959182,
      metadata: {
        title: 'Trail',
        artist: 'Nobara Hayakawa'
      }
    },
    {
      track: '10 - Paper Navy - Tongue Tied.mp3',
      duration: 201.11673469387756,
      metadata: {
        title: 'Tongue Tied',
        artist: 'Paper Navy'
      }
    },
    {
      track: '11 - 60 Tigres - Garage.mp3',
      duration: 245.36816326530612,
      metadata: {
        title: 'Garage',
        artist: '60 Tigres'
      }
    },
    {
      track: '12 - CM aka Creative - The Cycle (Featuring Mista Mista).mp3',
      duration: 221.41387755102042,
      metadata: {
        title: 'The Cycle (feat. Mista Mista)',
        artist: 'CM aka Creative'
      }
    }
  ],
  contentType: 'audio/mpeg'
};

export const providers: { [providerId: string]: IProvider; } = {
  netlify: {
    name: 'Netlify',
    getUrl: (folder, track) => baseUrl + '/' + encodeURI(folder) + '/' + encodeURI(track.track)
  }
};
