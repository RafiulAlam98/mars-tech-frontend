import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";

export default function PcBuilder() {
  return <div>This is pc builder page</div>;
}
PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
