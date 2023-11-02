import { initExchange } from "../utils";
import { executeMethod } from "./updateOrder";
import { executeMethod as createOrder } from "./createOrder";

let exchangeInstanceId: string;

describe("updateOrder", () => {
  beforeAll(async () => {
    exchangeInstanceId = await initExchange();
  });

  it("it should update order", async () => {
    const createOrderResult = await createOrder(exchangeInstanceId);

    const result = await executeMethod(createOrderResult.id, exchangeInstanceId);

    expect(result).toMatchInlineSnapshot(
      {
        amount: 0.2,
        fee: {
          amount: 0.1,
          tokenSymbol: "ETH",
        },
        filled: 0.1,
        id: expect.any(String),
        pairSymbol: "ETH/USDT",
        price: 0.1,
        side: "buy",
        status: "open",
        timestamp: expect.any(Number),
        type: "market",
      },
      `
      {
        "amount": 0.2,
        "fee": {
          "amount": 0.1,
          "tokenSymbol": "ETH",
        },
        "filled": 0.1,
        "id": Any<String>,
        "pairSymbol": "ETH/USDT",
        "price": 0.1,
        "side": "buy",
        "status": "open",
        "timestamp": Any<Number>,
        "type": "market",
      }
    `,
    );
  });
});
