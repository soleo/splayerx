export default {
  msg: {
    titleName: 'SPlayer',
    file: {
      name: 'File',
      open: 'Open…',
      openURL: 'Open URL…',
      openRecent: 'Open Recent',
      clearHistory: 'Clear Playback History',
      closeWindow: 'Close Window',
    },
    playback: {
      name: 'Playback',
      fullScreen: 'Full Screen',
      keepPlayingWindowFront: 'Float on Top',
      increasePlaybackSpeed: 'Increase Playback Speed',
      decreasePlaybackSpeed: 'Decrease Playback Speed',
      captureScreen: 'Capture Screen',
      captureVideoClip: 'Capture Video Clip',
      mediaInfo: 'Media Info',
      play: 'Play',
      pause: 'Pause',
      forward: 'Step Forward',
      backward: 'Step Backward',
    },
    audio: {
      name: 'Audio',
      increaseAudioDelay: 'Increase Audio Delay',
      decreaseAudioDelay: 'Decrease Audio Delay',
      mute: 'Mute',
      switchAudioTrack: 'Switch Audio Track',
      defaultAudioTrack: 'Default',
      increaseVolume: 'Increase Volume',
      decreaseVolume: 'Decrease Volume',
    },
    subtitle: {
      name: 'Subtitles',
      subtitleSelect: 'Translation',
      AITranslation: 'Reload Smart Translation',
      loadSubtitleFile: 'Load Subtitle File…',
      langZhCN: 'Chinese',
      langEn: 'English',
      notToShowSubtitle: 'None',
      noSubtitle: 'No Available Result.',
      mainSubtitle: 'Primary Subtitle',
      secondarySubtitle: 'Secondary Subtitle',
      subtitleStyle: 'Font Style',
      style1: 'Movie Style',
      style2: 'Anime Style',
      style3: 'Retro Style',
      style4: 'Japanese Style',
      style5: 'Modern Classic',
      subtitleSize: 'Font Size',
      size1: 'Small',
      size2: 'Default',
      size3: 'Large',
      size4: 'Extra Large',
      // increaseSubtitleSize: 'Increase Subtitle Size',
      // decreaseSubtitleSize: 'Decrease Subtitle Size',
      increaseSubtitleDelay: 'Increase Subtitle Delay',
      decreaseSubtitleDelay: 'Decrease Subtitle Delay',
    },
    window_: {
      name: 'Window',
      minimize: 'Minimize',
      enterFullScreen: 'Enter Full Screen',
      exitFullScreen: 'Exit Full Screen',
      bossKey: 'Boss Key',
    },
    help: {
      name: 'Help',
      splayerxHelp: 'Help',
    },
    splayerx: {
      about: 'About SPlayer',
      preferences: 'Preferences',
      homepage: 'Website',
      feedback: 'Feedback',
      hide: 'Hide',
      hideOthers: 'Hide Others',
      quit: 'Quit SPlayer',
    },
    update: {
      title: 'update dialog',
      message: 'Restart the app now to install update?',
      yes: 'yes',
      no: 'no',
      updateInstalled: 'has successfully installed update!',
    },
  },
  css: {
    titleFontSize: { fontSize: '21px' },
    versionFontSize: { fontSize: '14px' },
  },
  preferences: {
    none: 'None',
    settings: 'Settings',
    generalSetting: 'General',
    clearHistory: 'Always clear playback history on exit',
    privacyConfirm: 'Allow anonymous data / Smart Translation',
    setAsDefault: 'Set SPlayer as the Default Application',
    languagePriority: 'Language Priority',
    languageDescription: 'SPlayer will push translation results in the following language for you when the video is being played.',
    primaryLanguage: 'Primary Language',
    secondaryLanguage: 'Secondary Language',
    primary: 'Primary',
    secondary: 'Secondary',
  },
  advance: {
    rateTitle: 'Play Speed',
    subMenu: 'Subtitle Settings',
    audioMenu: 'Audio Settings',
    fontSize: 'Font Size',
    fontStyle: 'Font Style',
    subDelay: 'Subtitle Delay',
    fontItems: [['S'], ['M'], ['L'], ['XL']],
    audioDelay: 'Audio Delay',
    changeTrack: 'Audio Track',
    chosenTrack: 'Default',
    track: 'Track',
  },
  errorFile: {
    fileNonExist: {
      title: 'Cannot find the file',
      content: 'Will be removed from the list.',
    },
    emptyFolder: {
      title: 'Open Failed',
      content: 'Cannot find playable file',
    },
    default: {
      title: 'File error',
      content: 'Failed to open file.',
    },
    loadFailed: {
      title: 'Load Subtitle Failed',
      content: 'Subtitle type unsupported.',
    },
    noResult: {
      title: 'No Result Found',
      content: 'Network error or lack of results.',
    },
  },
  loading: {
    title: '',
    content: 'Loading Translations ...',
  },
  privacyBubble: {
    masVersion: {
      content: 'Smart Translation function needs your consent for uploading anonymous media info to the server  side, and you will not receive translation results if you disagree. There is no privacy information will be collected.',
      agree: 'Enable',
      disagree: 'Disable',
    },
    tryToDisable: {
      partOne: 'SPlayer uses anonymous data to enhance user experience. Smart Translation will be disabled if you ',
      partTwo: '.',
      underlinedContent: 'disagree',
      button: 'OK',
    },
    confirmDisable: {
      partOne: 'Confirm to ',
      partTwo: ' anonymous data and Smart Translation.',
      underlinedContent: 'disable',
      button: 'CANCEL',
    },
  },
  recentPlaylist: {
    folderSource: 'Folder',
    playlistSource: 'Playlist',
    playing: 'Playing',
  },
  nextVideo: {
    nextInFolder: 'Next in Folder',
    nextInPlaylist: 'Next in Playlist',
  },
  subtitle: {
    language: {
      zh: 'Chinese (Simplified)',
      'zh-CN': 'Chinese (Simplified)',
      'zh-TW': 'Chinese (Traditional)',
      en: 'English',
    },
  },
};

