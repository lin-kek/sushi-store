"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/stores/cart-store";
import CartItem from "./item";

export default function Sidebar() {
  const { cart } = useCartStore((state) => state);

  let total = 0;
  for (let item of cart) {
    total += item.quantity * item.product.price;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-500 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-xs">
          <div className="">Total:</div>
          <div className="">$ {total.toFixed(2)}</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button disabled={cart.length === 0}>Continue</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
