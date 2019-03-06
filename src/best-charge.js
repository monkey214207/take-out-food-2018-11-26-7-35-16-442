const loadAllItems = require('../src/items.js');
const loadPromotions = require('../src/promotions.js');

//#1
module.exports = function bestCharge(selectedItems) {
  itemInfo = getOrderInfo(selectedItems);
  bestPro = getBestPromotion(itemInfo);
  summary = getSummary(itemInfo,bestPro)
  return summary;
}

//#2
function getOrderInfo(selectedItems) {
  var itemInfo = []
  selectedItems.forEach(item => {
    let info = item.split(" x ");
    itemInfo.push({id:info[0], count:Number(info[1])})
  });
  return itemInfo;
  }
//#3
function getBestPromotion(itemInfo) {
  var allItems = loadAllItems();
  var promotions = loadPromotions();
  let basePrice = getBasePrice(allItems,itemInfo);
  bestPro = comparePromotions(basePrice,itemInfo,promotions)
  return bestPro;
  }
//#4
function getBasePrice(allItems,itemInfo){
  var basePrice = 0
  itemInfo.forEach(info => {
      allItems.find(function(x) {
          if(x.id === info.id){
              info.name = x.name;
              info.price = x.price;
          }
      })
      basePrice +=  info.price * info.count;
  });
      return basePrice;
}
//#5
function comparePromotions(basePrice,itemInfo,promotions){
  let typeADiscount = discountByPromotionA(basePrice);
  let typeBDiscount = discountBypromotionB(itemInfo, promotions[1].items);
  if (typeADiscount == 0 & typeBDiscount == 0){return{type:'no', discount: 0, base:basePrice}}
  else if(typeADiscount >= typeBDiscount){return {type:promotions[0].type, discount: typeADiscount, base:basePrice}}
  else{return {type:promotions[1].type, discount: typeBDiscount, base:basePrice}}
}
//#6
function discountByPromotionA(basePrice){
  discount = (basePrice >= 30)?6:0;
  return discount;
}
//#7
function discountBypromotionB(itemInfo, discountItems){
  var discount = 0;
  itemInfo.forEach(info => {
      if(discountItems.find(function(x) {return x === info.id})){
          discount += info.price/2;
      }
  });
  return discount;
}

//#8
function getSummary(itemInfo,bestPro){
  var summary = '============= 订餐明细 ============= \n ';
  itemInfo.forEach(info => {
    let tmp = info.name +' x '+info.count+' = '+info.count*info.price+'元 \n ';
    summary += tmp;
  });
  if(bestPro.type === '满30减6元'){
    summary += '----------------------------------- \n 使用优惠: \n 满30减6元，省6元 \n ';
  }
  if(bestPro.type === '指定菜品半价'){
    summary += '----------------------------------- \n 使用优惠: \n 指定菜品半价(黄焖鸡，凉皮)，省'+bestPro.discount+'元 \n ';
  }
  summary += '----------------------------------- \n 总计：'+(bestPro.base-bestPro.discount)+'元 \n '+'===================================';
  return summary;
}
