export const yandexGetMapsInfo = (param) => `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${param}&apikey=${process.env.VUE_APP_YANDEX_API_KEY}`;
export const yandexGetUserLocation = (param) => `https://geocode-maps.yandex.ru/1.x/?apikey=1611c43a-88ab-4d95-b60a-7c7720a40a9d&format=json&geocode=${param}&kind=locality&lang=ru_RU`;
