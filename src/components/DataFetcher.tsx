import React, { useEffect, useState } from "react";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string>("Loading...");

  useEffect(() => {
    setTimeout(() => {
      setData("Data Fetched!");
    }, 2000);
  }, []);

  return <h3>{data}</h3>;
};

export default DataFetcher;
