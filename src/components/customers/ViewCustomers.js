import React from "react";

const ViewCustomers = (data) => {
  const setData = data.data;
  return (
    <div className="grid grid-cols-5 gap-4">
      {setData.map((data) => (
        <div className="flex " key={data.id}>
          <div className="block w-[300px] h-[300px] p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {data.name}
            </h5>
            <p className="text-gray-700 text-base mb-4">{data.job_title}</p>
            <p className="text-gray-700 text-base mb-4">{data.phone_number}</p>
            <p className="text-gray-700 text-base mb-4">{data.status}</p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewCustomers;
