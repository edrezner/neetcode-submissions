class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buyDay = prices[0];

        for (let i = 1; i < prices.length; i++) {
            let current = prices[i];

            if (current < buyDay) buyDay = current;

            if (current - buyDay > profit) profit = current - buyDay;
        }

        return profit;
    }
}
