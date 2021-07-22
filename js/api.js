const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    }).catch((error) => {
      console.log('error');
    });
};

const sendData = (formData, onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: new FormData(),
  }).then((response) => {
    onSuccess();
  })
    .catch((error) => {
      onError('Форма не отправлена. Попробуйте ещё раз');
    });
};
export {getData, sendData};
