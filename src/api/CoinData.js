export const fetchCoinData = async (range) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - range);
  const unixTimestampSeconds = Math.floor(thirtyDaysAgo.getTime() / 1000);
  const dateToday = Math.floor(new Date().getTime() / 1000);

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${unixTimestampSeconds}&to=${dateToday}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res.prices.map((item) => convertTimestampToDate(item));
    });
  return res;
};

function convertTimestampToDate([timestamp, price]) {
  const date = new Date(timestamp);
  return {
    timestamp: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    price,
  };
}

export async function getCurrentValue() {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`;
  return fetch(url).then((res) => res.json());
}
