import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { ExchangeRates, EXCHANGE_RATES_DOC } from "../apollo/queries";

const UseQueryPage: NextPage = () => {
  const { loading, error, data } = useQuery<ExchangeRates>(EXCHANGE_RATES_DOC);

  return (
    <div>
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

export default UseQueryPage;
