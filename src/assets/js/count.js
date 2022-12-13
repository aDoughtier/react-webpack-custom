//一般放置一些第三方库，只需要引入，如leaflet
const path = require('path')
export default function count(x, y) {
  return x - y;
}

console.log(path.resolve(__dirname,'src/'))