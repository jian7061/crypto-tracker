const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinID: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinID}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinID: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinID}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string | undefined) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
