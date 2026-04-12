import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#f97316",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#84cc16",
];

const PageToRead = () => {
  const booksData = useLoaderData();
  const chartData = booksData.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Pages Per Book</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} barCategoryGap="60%" barSize={40}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pages"
            radius={[100, 100, 0, 0]} // এখানে 12 দিলাম, তুমি পছন্দমতো চেঞ্জ করো
            label={{ position: "top", fontSize: 12 }}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
