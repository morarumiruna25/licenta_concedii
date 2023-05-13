import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Conturi = ({ users }) => {
  const conturi = users.data;
  const [search, setSearch] = useState('');

  const [type, setType] = useState('nume');
  const filteredUsers = conturi.filter(conturi =>
    conturi[type].toLowerCase().includes(search.toLowerCase())
  );

  function getInterval(intervals) {
    const currentDate = new Date();

    for (let i = 0; i < intervals.length; i++) {
      const intervalStart = new Date(intervals[i].start);
      const intervalEnd = new Date(intervals[i].end);

      if (currentDate >= intervalStart && currentDate <= intervalEnd) {
        return (
          <div className="bg-pink whitespace-nowrap px-1 rounded-md">
            In Concediu
          </div>
        );
      } else if (currentDate > intervalEnd) {
        return (
          <div className="bg-green-600 text-gray-900 px-1 rounded-md whitespace-nowrap">
            Fara Concediu
          </div>
        );
      } else {
        return (
          <div className="bg-yellow-500 text-gray-900 px-1 rounded-md whitespace-nowrap">
            Uremaza Concediu
          </div>
        );
      }
    }
  }

  return (
    <div>
      <div className="md:w-3/4 m-auto my-2 px-1">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-pink "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 px-4 pl-10  text-gray-200 text-md border tracking-[1px] font-custom focus:ring-2  focus:ring-blue3 focus:outline-none bg-main rounded-md border-blue2 "
            placeholder="Cauta după ..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            onClick={() => setType(type == 'nume' ? 'departament' : 'nume')}
            className="text-white absolute right-2.5 bottom-[0.6rem] bg-blue4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 "
          >
            {type}
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-white uppercase bg-main border-t-2 rounded-t-md border-pink ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nume
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Email
                  {/* <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </Link> */}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  status
                  {/* <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </Link> */}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center w-20 mr-2">
                  Departament
                  {/* <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </Link> */}
                </div>
              </th>
              {/* <th scope="col" className="px-6 py-3">
                <div className="flex">
                  {' '}
                  <span className="sr-only">Edit</span>
                  <span className="sr-only">Delete</span>
                </div>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((x, i) => {
              return (
                <tr key={i} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {x.nume}
                  </th>
                  <td className="px-6 py-4 text-gray-300">{x.email}</td>
                  <td className="px-6 py-4 text-gray-300">
                    {getInterval(x.concediu)}
                  </td>
                  <td className="px-6 py-4 w-20 text-center  text-gray-300">
                    {x.departament}
                  </td>
                  {/* <td className="px-1 -translate-x-5 py-4 align-self-start text-right">
                    <div className="flex justify-evenly">
                      {' '}
                      <Link
                        href="#"
                        className="font-medium text-blue4 hover:underline"
                      >
                        Edit
                      </Link>{' '}
                      <Link
                        href="#"
                        className="font-medium text-pink hover:underline"
                      >
                        Delete
                      </Link>{' '}
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Conturi;

export async function getServerSideProps() {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://licenta-concedii.vercel.app'
      : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/getusers`);
  const users = await res.json();
  return { props: { users } };
}
