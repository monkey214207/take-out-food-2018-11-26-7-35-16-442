const getBestPromotion = require('../src/get-best-promotion.js');
describe('Get best promotion', function(){

    /* it('no discount output basePrice', function(){
        let input = [{id:'ITEM0013',count:4}];
        let summary = getBestPromotion(input);
        let expected = 24;
        expect(summary).toEqual(expected)
    }); */

    /* it('no discount output itemInfo', function(){
        let input = [{id:'ITEM0013',count:4}];
        let summary = getBestPromotion(input);
        let expected = [{id:'ITEM0013',count:4,name:'肉夹馍',price:6}];
        expect(summary).toEqual(expected)
    }); */

    it('should choose typeA discount output bestPro', function(){
        let input = [{id:'ITEM0013',count:4},{id:'ITEM0022',count:1}];
        let summary = getBestPromotion(input);
        let expected = {type:'满30减6元', discount: 6, base:32};
        expect(summary).toEqual(expected)
    });

    it('should choose typeB discount output bestPro', function(){
        let input = [{id:'ITEM0001',count:1},{id:'ITEM0013',count:2},{id:'ITEM0022',count:1}];
        let summary = getBestPromotion(input);
        let expected = {type:'指定菜品半价', discount: 13, base:38};
        expect(summary).toEqual(expected)
    });

    it('should choose no discount output bestPro', function(){
        let input = [{id:'ITEM0013',count:4}];
        let summary = getBestPromotion(input);
        let expected = {type:'no', discount: 0, base:24};
        expect(summary).toEqual(expected)
    });

})