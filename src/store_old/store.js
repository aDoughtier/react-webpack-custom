import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' //支持开发工具
import reducers from './reducers' //引入reducers,已经合并
export default createStore(reducers, composeWithDevTools());
/**
 * createStore可以传递三个参数，即第二个参数为state，如果有的话，会覆盖reducer的state形参默认值
 * 一般以页面作区分，这样以后更好维护
 * let store = {
 *  home:{
 *  },
 *  about:{
 *  }
 * }
 * //因为这些状态用页面标识符包裹起来了，所以需要展开来
 * let state = {}
 * for (const key in store) {
 * if (Object.hasOwnProperty.call(store, key)) state = { ...state, ...store[key] }}
 * export default createStore(reducers,state,composeWithDevTools(applyMiddleware(thunk)));  
 */
