// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let discussOut = {
    info: event.info,
    discuss: event.discuss,
  }

  await db.collection('community').where({
    _id: event.id
  })
    .update({
      data: {
        // 表示将 done 字段置为 true
        discuss: _.push(discussOut)
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  console.log(event)
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}