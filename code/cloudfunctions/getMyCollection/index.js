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
  const res = await db.collection('basicInfo').where({
    openId: event.openId
  })
    .field({
      like: true
    }).get()
  // console.log(res.data)
  let resArr = [];
  let item = {};
  let likeArr = res.data[res.data.length - 1].like;
  for (let i = 0; i < likeArr.length; i++) {
    //console.log(res.data[i]._id)
    item = await db.collection('community').where({
      _id: likeArr[i]
    }).field({
      _id:true,
      content: true,
      like: true,
      image: true,
      read: true,
      time: true,
      name: true
    }).get()
    resArr.push(item.data[0]);
  }
  return {
    resArr
  }
}