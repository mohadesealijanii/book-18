"use client";

import { CartProvider } from "@/context/CartContext";

import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

// export const metadata = {
//   title: "بوک پلاس",
//   description: "Book Plus",
// };

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <CartProvider>{children}</CartProvider>
        </body>
      </html>
    </Provider>
  );
}
