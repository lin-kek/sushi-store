import { getAllProducts } from "@/services/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import EmptyTab from "./empty";
import ProductsItem from "./item";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

export default async function ProductsTab() {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((item) => item.category === "sushi"),
    },
    {
      title: "Temaki",
      value: "temaki",
      products: products.filter((item) => item.category === "temaki"),
    },
    {
      title: "Packs",
      value: "packs",
      products: products.filter((item) => item.category === "pack"),
    },
  ];

  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-1">
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((item) => (
        <TabsContent key={item.value} value={item.value} className="mt-6">
          {item.products.length > 0 && (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6">
              {item.products.map((product) => (
                <ProductsItem key={product.id} item={product} />
              ))}
            </div>
          )}
          {item.products.length === 0 && <EmptyTab />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
