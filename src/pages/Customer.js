import React, { useEffect, useState } from "react";
import useAuth from "../ahooks/useAuth";
import Api from "../api/Api";

const CUSTOMERS_URL = "/customers";

const Customer = () => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await Api.get(CUSTOMERS_URL, {
          headers: {
            Authorization: auth.access_token,
          },
        });
        setMessage(response.data.message);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetch();
  }, [auth.access_token]);

  return <div>{loading ? "Loading..." : message}</div>;
};

export default Customer;
