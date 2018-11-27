var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search',
    { 'key': options.key,
      'part': 'id,snippet',
      'maxResults': options.max || '5',
      'q': options.query,
      'type': 'video',
      'videoEmbeddable': 'true',
    }, (data) => {callback(data.items);});
};

export default searchYouTube;
