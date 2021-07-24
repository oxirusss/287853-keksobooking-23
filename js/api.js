const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    }).catch((error) => {
      onError(error);
    });
};

const sendData = (formData, onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    onSuccess();
  })
    .catch((error) => {
      onError('Форма не отправлена. Попробуйте ещё раз'); //Вот тут тоже заменяем на просто error или оставляем как есть?
    });
};
export {getData, sendData};
