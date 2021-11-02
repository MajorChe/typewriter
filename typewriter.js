const sentence = "hello there from lighthouse labs";
const newArr = sentence.split('');
const func = (arr) =>{
  let n = 0;
  for (let item in arr) {
    setTimeout(() => {
      if (item == arr.length -1) {
        process.stdout.write(arr[item] +'\n');
      } else {
        process.stdout.write(arr[item] + ' ');
      }
    }, n);
    n = n + 50;
  }
  
};
func(newArr);
