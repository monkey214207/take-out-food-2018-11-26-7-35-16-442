const loadAllItems = require('../src/items.js');
const loadPromotions = require('../src/promotions.js');

module.exports = function getBestPromotion(itemInfo) {
    var allItems = loadAllItems();
    var promotions = loadPromotions();
    let basePrice = getBasePrice(allItems,itemInfo);
    bestPro = comparePromotions(basePrice,itemInfo,promotions)
    return bestPro;
    }

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

function discountByPromotionA(basePrice){
    discount = (basePrice >= 30)?6:0;
    return discount;
}

function discountBypromotionB(itemInfo, discountItems){
    var discount = 0;
    itemInfo.forEach(info => {
        if(discountItems.find(function(x) {return x === info.id})){
            discount += info.price/2;
        }
    });
    return discount;
}

function comparePromotions(basePrice,itemInfo,promotions){
    let typeADiscount = discountByPromotionA(basePrice);
    let typeBDiscount = discountBypromotionB(itemInfo, promotions[1].items);
    if (typeADiscount == 0 & typeBDiscount == 0){return{type:'no', discount: 0, base:basePrice}}
    else if(typeADiscount >= typeBDiscount){return {type:promotions[0].type, discount: typeADiscount, base:basePrice}}
    else{return {type:promotions[1].type, discount: typeBDiscount, base:basePrice}}
}