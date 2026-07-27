class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let low = 0;
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            let day = prices[i];
            let difference = day - prices[low];
            
            if (difference > profit) profit = difference;
            if (day < prices[low]) low = i;
        }

        return profit;
    }
}
