/*let message = "Hi, my name is, WHAT!, my name is WHO";
getMess =  function(message) {
    console.log(message);
    setTimeout(() => {
        let m = "A family reunion!";
        getMess(m);
    }, 2000);
}
getMess(message);*/

/*function getWords() {
    setTimeout(() => {console.log('My salsa')},1000);
    setTimeout(() => {console.log('Purple Rain, purple rain!')},2000);
    setTimeout(() => {console.log('Get Him To The Greek!')}, 3000);
    setTimeout(() => {console.log('Blowing Money Fast!')}, 4000);
}
getWords();*/

function done() {
    console.log('Job`s Done');
}

function countDown(num, callback) {
    setTimeout(() => {
        if (num > 0) {
            console.log(num);
            countDown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);
}
countDown(6, done);



let lunchTime = true;
let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if(lunchTime){
            resolve({
            Food: 'pizza',
            Drink: 'sweet tea'
        });
        }else{
            reject(new Error('Something smell fishy'))
        }
    })
}

orderMeSomeFood(true)
    .then(res => orderMeSomeFood(false))
    .then(res => orderMeSomeFood(true))
    .catch(err => console.error(err));
