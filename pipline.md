## the pipline picture
![管道图](https://github.com/monkey214207/take-out-food-2018-11-26-7-35-16-442/blob/master/TaskPipLine.png?raw=true)
```
#1 bestCharge()
输入：
    items: [string]
    itemInfo: [{id: string, count: number}] : getOrderInfo()
    bestPro:{type: string, pro: number,basePrice: number}:getBestPromotion()
    summary: string : getSummary()
输出：
    summary: string

#2 getOrderInfo()
输入：
    items: [string]
输出：
    itemInfo: [{id: string, count: number}]

#3 getBestPromotion()
输入：
    allItems: [{id: string, name: string, prince: number}] : loadAllItems
    promotions:[{type: string},{type: string, items:[string]}] : loadPromotions
    itemInfo: [{id: string, count: number}] : getOrderInfo

    basePrice: number :getBasePrice()
    itemInfo: [{id: string, count: number, name: string, price: number}]
    bestPro:{type: string, pro: number} :comparePromotions()
输出：
    bestPro:{type: string, pro: number,basePrice: number}

#4 getBasePrice()
输入：
    itemInfo: [{id: string, count: number}]
    allItems: [{id: string, name: string, prince: number}]
    itemInfo: [{id: string, count: number}] : getBestPromotion()
输出：
    basePrice: number
    itemInfo: [{id: string, count: number, name: string, price: number}]
#5 comparePromotions()
输入：
    itemInfo: [{id: string, count: number, name: string, price: number}]
    discount: number :discountByPromotionA()
    discount: number :discountByPromotionB()
输出：
    bestPro:{type: string, discount: number}

#6 discountByPromotionA()
输入：
    basePrice: number
输出：
    discount: number

#7 discountByPromotionB()
输入：
    itemInfo: [{id: string, count: number, name: string}]
输出：
    discount: number

#8 getSummary()
输入：
    itemInfo: [{id: string, count: number, name: string, price: number}]
    bestPro:{type: string, discount: number, basePrice: number}
输出：
    summary: String
```
