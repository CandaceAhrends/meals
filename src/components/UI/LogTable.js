import React from "react";
import MaterialTable from "material-table";

export default function LogTable({ table }) {
  return (
    <MaterialTable
      title="Diary"
      columns={table.columns}
      data={table.data}
      options={{
        search: false,
        paging: false
      }}
    />
  );
}
