// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  await db.collection('community').add({
    data: {
      image: event.message.image,
      content: event.message.content,
      name: event.message.name,
      openId: event.userInfo.openId,
      time: event.message.time,
      like: event.message.like,
      read: event.message.read
    }
  })
  return {
    event
  }
}