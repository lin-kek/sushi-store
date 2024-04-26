"use client";

import { Product } from "@/types/product";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  item: Product;
};

export default function ProductsItem({ item }: Props) {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);

  function handleAddButton() {
    upsertCartItem(item, 1);

    toast({
      title: "Added to cart!",
      description: item.name,
    });
  }

  return (
    <div className="">
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm">$ {item.price.toFixed(2)}</p>
        <Button variant={"outline"} onClick={handleAddButton}>
          Add
        </Button>
      </div>
    </div>
  );
}
