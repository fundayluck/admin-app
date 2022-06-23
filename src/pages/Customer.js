import React, { useEffect, useState } from "react";
import useAuth from "../ahooks/useAuth";
import Api from "../api/Api";
import ViewCustomers from "../components/customers/ViewCustomers";

const CUSTOMERS_URL = "/customers";

const Customer = () => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await Api.get(CUSTOMERS_URL, {
          headers: {
            Authorization: auth.access_token,
          },
        });

        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetch();
  }, [auth.access_token]);

  return (
    <div>
      {loading ? (
        <h1 className="flex justify-center text-xl underline">
          Please Wait...
        </h1>
      ) : (
        <div>
          <ViewCustomers data={data} />
        </div>
      )}
    </div>
  );
};

export default Customer;
