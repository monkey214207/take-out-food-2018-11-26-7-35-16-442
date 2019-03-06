module.exports = function getOrderInfo(selectedItems) {
  var testInfo = []
  selectedItems.forEach(item => {
    let info = item.split(" x ");
    testInfo.push({id:info[0], count:Number(info[1])})
  });
  return testInfo;
  }