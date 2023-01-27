import axios from 'axios';

export const fetchPichureData = (searchQuery, page = 1, per_page = 12) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '31858870-09ead0999ee20650dc52876fe',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      q: searchQuery,
      per_page,
    },
  });
};
