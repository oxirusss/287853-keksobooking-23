const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    }).catch(() => {
      console.log('error');
    });
};

const sendData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: new FormData(),
  }).then(response => {

  })
};
export {getData};
