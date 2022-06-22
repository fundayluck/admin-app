import React from "react";
import AccountBank from "../components/company/AccountBank";
import Activity from "../components/company/Activity";
import CompanyProfile from "../components/company/CompanyProfile";
import Location from "../components/company/Location";
import Relation from "../components/company/Relation";

const Company = () => {
  return (
    <div className="flex">
      <CompanyProfile />
      <div className="w-full">
        <Location />
        <div className="grid grid-cols-2 gap-3">
          <AccountBank />
          <Activity />
          <Relation />
        </div>
      </div>
    </div>
  );
};

export default Company;
