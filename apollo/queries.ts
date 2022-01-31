import { gql } from "@apollo/client";

export const EXCHANGE_RATES_DOC = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export type ExchangeRates = {
  rates: { currency: string; rate: string; name: string }[];
};
