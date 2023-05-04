// Best time to buy and sell stock (https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
// Time: O(n), Space: O(1)

/*
Краткий алгоритм:
Двигаемся только слева направо.
Два пойнтера, buy сначала = 0, sell = 1.
В цикле инкрементируем sell, если выгода < 0, то buy = sell
*/

/*
Полный алгоритм:
1. max инит 0
2. Пойнтер buy инит 0
3. Цикл for sell = 1; sell < prices.length; sell++
4. Считаем profit
5. Если profit < 0, то это новая нижняя точка, buy = sell
6. Если profit больше max, то max = profit
*/

function maxProfit(prices: number[]): number {
    let max = 0 // 1
    let buy = 0 // 2

    for (let sell = 1; sell < prices.length; sell++) {
        const profit = prices[sell] - prices[buy] // 4
        if (profit < 0) buy = sell // 5
        if (profit > max) max = profit // 6
    }

    return max
}
