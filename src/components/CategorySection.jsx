import React from "react";
import CategoryCard from "./CategoryCard";
import UseForJobs from "./Hooks/UseForJobs";


const CategorySection = () => {
  const { JobsData } = UseForJobs();
  const categories = [
    { name: "Accounting/Finance", count: JobsData?.filter((job) => job.jobCategory === "Accounting-Finance").length },
    { name: "Health & Fitness", count: JobsData?.filter((job) => job.jobCategory === "Health-&-Fitness").length },
    { name: "Data Entry/Operator", count: JobsData?.filter((job) => job.jobCategory === "Data-Entry-Operator").length },
    { name: "Production/Operation", count: JobsData?.filter((job) => job.jobCategory === "Production-Operation").length  },
    { name: "Research/Consultancy", count: JobsData?.filter((job) => job.jobCategory === "Research-Consultancy").length},
    { name: "Education/Training", count: JobsData?.filter((job) => job.jobCategory === "Education-Training").length },
    { name: "Engineer/Architects", count: JobsData?.filter((job) => job.jobCategory === "Engineer-Architects").length },
    { name: "Marketing/Sales", count:JobsData?.filter((job) => job.jobCategory === "Marketing-Sales").length },
    { name: "Design/Creative", count: JobsData?.filter((job) => job.jobCategory === "Design-Creative").length },
    { name: "Telecommunication", count: JobsData?.filter((job) => job.jobCategory === "Telecommunication").length },
    { name: "Security/Support Service", count: JobsData?.filter((job) => job.jobCategory === "Security-Support-Service").length },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Popular Categories
      </h2>
      <p className="text-sm text-slate-400 text-center mb-12">
        Many desktop publishing packages and web page editors
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
