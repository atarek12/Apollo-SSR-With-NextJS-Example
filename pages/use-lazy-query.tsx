import { useLazyQuery } from "@apollo/client";
import type { NextPage } from "next";
import React from "react";
import { ExchangeRates, EXCHANGE_RATES_DOC } from "../apollo/queries";

const UseLazyQueryPage: NextPage = () => {
  const [queryRates, { loading, error, data }] =
    useLazyQuery<ExchangeRates>(EXCHANGE_RATES_DOC);

  return (
    <div>
      <button onClick={() => queryRates()}>Get Exchange Rates</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error :(</p>
      ) : !data ? null : (
        data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UseLazyQueryPage;
