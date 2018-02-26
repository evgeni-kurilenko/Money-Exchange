// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   
    if (currency > 10000) {
        return ({error: "You are rich, my friend! We don't have so much coins for exchange"})
    } else if (currency == 0) {
        return {};
    } else {
        var h = 0, q = 0, d = 0, n = 0, p = 0;
        //var p = currency%5;
        var currency1=currency;
        var result = {};
        if (currency1 >= 50) {
            h = (currency1 - currency1%50)/50;
            result.H=h;
            currency1 = currency1 - h*50;
            /*if (currency1>0) {
                result+=', ';
            }*/
        }
        if (currency1 >= 25) {
            q = (currency1 - currency1%25)/25;
            result.Q=q;
            currency1 = currency1 - q*25;
            /*if (currency1>0) {
                result+=', ';
            }*/
        }
        if (currency1 >= 10) {
            d = (currency1 - currency1%10)/10;
            result.D=d;
            currency1 = currency1 - d*10;
            /*if (currency1>0) {
                result+=', ';
            }*/
        }
        if (currency1 >= 5) {
            n = (currency1 - currency1%5)/5;
            result.N=n;
            currency1 = currency1 - n*5;
            /*if (currency1>0) {
                result+=', ';
            }*/
        }
        if (currency1 >= 1) {
            p = currency1;
            result.P=p;
        }
        
    return result;
        
    }
    
    // Return an object containing the minimum number of coins needed to make change h50 q25 d10 n5 p1
}
