class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let profit = 0;

        for (let sell = 1; sell < prices.length; sell++) {
            let difference = prices[sell] - prices[buy];
            if (difference < 0) buy = sell;
            if (difference > profit) profit = difference;
        }

        return profit;
    }
}
