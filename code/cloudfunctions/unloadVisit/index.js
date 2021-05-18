// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event)
  // event.articalId
  let resbody = '';
  await db.collection('community').where({
    _id: event.articalId
  })
    .update({
      data: {
        // 表示将 done 字段置为 true
        read: _.inc(1)
      },
      success: function (res) {
        console.log(res.data)
        resbody = res.data;
      }
    })
  return {
    resbody
  }
}