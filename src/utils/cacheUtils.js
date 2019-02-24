const CUSTOM_IMAGES = 'customImages';

export const getCache = () => {
    let cache = window.localStorage.getItem(CUSTOM_IMAGES);
    if (cache) {
      cache = JSON.parse(cache);
      if (isValidCache(cache.dateCreated)) {
        return cache.data;
      } else {
          clearCache();
      }
    }
    return;
  };
  
  export const setCacheItem = (img) => {
    const images = getCache() || [];
    images.push(img);
    const cache = JSON.stringify({ dateCreated: new Date(), data: images });
    localStorage.setItem( CUSTOM_IMAGES, cache);
  };

  export const removeCacheItem = (id) => {
    const images = getCache() || [];
    const filtered = images.filter(ele => ele.id === id);
    const cache = JSON.stringify({ dateCreated: new Date(), data: filtered });
    localStorage.setItem( CUSTOM_IMAGES, cache);
  };
  
  const isValidCache = d1 => {
    d1 = new Date(d1);
    const d2 = new Date();
    return d2 - d1 < 1000 * 60 * 60 * 24;
  };
  
  export const clearCache = () => {
      localStorage.clear();
  }
  