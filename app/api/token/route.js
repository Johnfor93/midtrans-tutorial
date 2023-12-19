import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET,
  //   clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export async function POST(request) {
  const { id, productName, price, quantity } = await request.json();

  let parameter = {
    transaction_details: {
      order_id: "my-order-" + id,
      gross_amount: price * quantity,
    },
    item_details: {
      name: productName,
      price,
      quantity,
    },
  };
  console.log(parameter);

  const token = await snap.createTransaction(parameter);
  console.log(token);
  return NextResponse.json({ token });
}
