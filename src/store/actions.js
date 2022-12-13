/**
 * @description action类型，如果很长的话，一般用下划线连起来
 */
export const ADD = "ADD"
export const DECREMENT = "DECREMENT"

//actions给页面用，每个action都有固定的作用，因为type固定，所以一个reducer可能对应多个actions
export const createAddAction = (data) => ({
  type: ADD,
  data
})
