// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
let temp;
exports.main = async (event, context) => {
  console.log(event)
  let temp = [];
  await db.collection('basicInfo').where({
    openId:event.info
  })
  .get()
  .then(res=>{
    console.log(res)
    temp=res.data
  })
  return temp
}