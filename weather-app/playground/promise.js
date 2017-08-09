var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>  {
      if( typeof a === 'number' && typeof b === 'number') {
        resolve( a+b );
      } else {
        reject('must be numbers');
      }
    },1500)
  });
};

asyncAdd( 5,'7' ).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Result: ', res)
}).catch((error) => {
  console.log(error);
});
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey it worked!');
//     // reject('Unable to  fulfill promise');
//   }, 2500);
// });
//this function only fire once.
// somePromise.then((message) => {
//    console.log('success: ', message);
// },
// (errorMessage) => {
//   console.log('error: ', errorMessage );
// })
