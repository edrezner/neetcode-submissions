class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let profit = 0;

        for (let i = 0; i < prices.length; i++) {
            let difference = prices[sell] - prices[buy];
            if (difference < 0) buy = sell;
            if (difference > profit) profit = difference;
            if (sell < prices.length - 1) sell++;
        }

        return profit;
    }
}
