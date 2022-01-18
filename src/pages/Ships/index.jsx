import * as React from "react";
import { useGetAllShips } from "@/api/ships";
import DataTable from "@/components/DataTable";

const ShipsPage = () => {
  const { data, error, isLoading } = useGetAllShips();

  return (
    <>
      {error ? (
        <div>{error.toString()}</div>
      ) : (
        !isLoading && <DataTable rows={data} />
      )}
    </>
  );
};

export default ShipsPage;
