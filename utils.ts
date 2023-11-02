import CedeSDK from "@cedelabs/demo-sdk";
import { exchanges } from "./exchange";

const { CEDE_MODE, SELECTED_EXCHANGE } = process.env;

export const cedeSDK = new CedeSDK(CEDE_MODE ?? "MOCK");

export const initExchange = async (specificExchange = "coinbase") => {
  const exchange = exchanges[SELECTED_EXCHANGE ?? specificExchange];
  const registeredExchange = await cedeSDK.api.registerExchangeInstance({
    exchangeId: SELECTED_EXCHANGE ?? "",
    ...exchange,
  });

  return registeredExchange.exchangeInstanceId;
};
