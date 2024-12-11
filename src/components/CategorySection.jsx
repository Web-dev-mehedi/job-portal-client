import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const categories = [
    { name: "Accounting/Finance", count: 305 },
    { name: "Health & Fitness", count: 4 },
    { name: "Data Entry/Operator", count: 25 },
    { name: "Production/Operation", count: 95 },
    { name: "Research/Consultancy", count: 34 },
    { name: "Education/Training", count: 212 },
    { name: "Engineer/Architects", count: 376 },
    { name: "Marketing/Sales", count: 666 },
    { name: "Design/Creative", count: 93 },
    { name: "Telecommunication", count: 450 },
    { name: "Security/Support Service", count: 62 },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Popular Categories
      </h2>
      <p className="text-sm text-slate-400 text-center mb-12">
        Many desktop publishing packages and web page editors
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category.name}
            count={category.count}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
