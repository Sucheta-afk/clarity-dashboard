import { Navigation } from "@/components/Navigation";
import { ListCard } from "@/components/ListCard";
import { Package } from "lucide-react";

const products = [
  { id: 1, name: "Steel Rods", category: "Raw Materials" },
  { id: 2, name: "Wooden Chairs", category: "Furniture" },
  { id: 3, name: "Plastic Pipes", category: "Plumbing" },
  { id: 4, name: "Ceramic Tiles", category: "Building Materials" },
  { id: 5, name: "LED Light Bulbs", category: "Electrical" },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main className="md:ml-64 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Products</h1>
            <p className="text-muted-foreground">Manage your product inventory</p>
          </div>

          <div className="space-y-3">
            {products.map((product) => (
              <ListCard
                key={product.id}
                title={product.name}
                subtitle={product.category}
                icon={<Package size={20} />}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
