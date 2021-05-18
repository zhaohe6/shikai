// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event)
  //console.log(res.data[i]._id)
  const resArr= await db.collection('community').where({
    openId: event.openId
  }).field({
    _id: true,
    content: true,
    like: true,
    image: true,
    read: true,
    time: true,
    name: true
  }).get()

  return {
    resArr
  }
}