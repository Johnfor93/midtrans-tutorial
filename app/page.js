"use client";

import Image from "next/image";
import { product } from "./libs/product";
import Checkout from "./components/Checkout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // render midtrans snap token
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.PUBLIC_CLIENT_KEY;
    const element = document.createElement("script");

    element.src = snapScript;
    element.setAttribute("data-client-key", clientKey);
    element.async = true;

    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  return (
    <>
      <main className="max-w-xl mx-auto sm:p-16">
        <div className="flex flex-col">
          <Image src={product.image} alt="..." width={250} height={250} className="w-full object-cover" />
          <div className="border border-gray-100 bg-white p-6">
            <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1.5 text-sm text-gray-700">Rp {product.price}</p>
            <p className="py-4 text-sm text-gray-700 text-justify">{product.description}</p>
            <Checkout />
          </div>
        </div>
      </main>
    </>
  );
}
