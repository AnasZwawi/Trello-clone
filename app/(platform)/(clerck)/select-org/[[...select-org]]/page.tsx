import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"/organization/:id"}
    />
  );
};

export default page;
