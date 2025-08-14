import axios from 'axios';

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '51779185-5748d544e2451f70346636fc6',
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
    throw error;
  }
}