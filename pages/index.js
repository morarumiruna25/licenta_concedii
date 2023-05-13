import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/utils/userReducer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function Home({ users }) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [concediu, setConcediu] = useState([]);
  const [userData, setuserData] = useState({});

  const router = useRouter();
  const user = useSelector(state => state.user.user);

  const [tokenChecked, setTokenChecked] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    const nume = Cookies.get('nume');

    if (!token) {
      router.push('/auth/signin');
    } else {
      setTokenChecked(true);
      setuserData({ email: token, nume: nume });
    }
    const userInfo = users.data.find(
      user => user.email == Cookies.get('token')
    );
    setuserData(userInfo);
    // dispatch(setUser(userInfo));
  }, []);

  useEffect(() => {}, [router]);

  const handleStartDateChange = useCallback(date => {
    setStartDate(date);
  }, []);

  const handleEndDateChange = useCallback(date => {
    setEndDate(date);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const newConcediu = { start: startDate, end: endDate };
    setConcediu([newConcediu]);
  };

  useEffect(() => {
    const sendConcediuToBackend = async () => {
      // const datauser = email
      const res = await axios.post('/api/concediu', {
        concediu,
        email: userData.email,
      });
      setuserData(res.data.user);
    };

    if (concediu.length > 0) {
      sendConcediuToBackend();
    }
  }, [concediu]);

  if (!tokenChecked) {
    return null; // or you can show a loading spinner
  }

  function handleLogout() {
    // Authenticate the user and get user data

    // Dispatch the setUser action with the user data
    dispatch(clearUser());

    // Dispatch the showToast action with a message and type

    dispatch({
      type: 'SHOW_TOAST',
      payload: {
        message: 'logout success',
        type: 'info',
      },
    });
  }
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', options);
  }
  return (
    <div className="md:m-2">
      {' '}
      <div className="text mb-2 text-2xl font-custom p-1 border-b-[3px] border-main  ">
        <p>
          <span className="text-blue4 capitalize font-bold tracking-[2px]">
            {userData?.nume} -
            <span className="text-pink">- {userData?.role}</span>
          </span>
        </p>
      </div>
      <div className="grid md:grid-cols-6  md:gap-4 p-2 ">
        <div className="col-span-2 w-full xl:col-span-1  container h-auto bg-slate-800 rounded-xl p-3">
          <form onSubmit={handleSubmit}>
            <div className=" flex-row flex-wrap ">
              <div className="  mx-auto ">
                {' '}
                <label className="text-white" htmlFor="start-date">
                  Start Date:
                </label>
                <DatePicker
                  id="start-date"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="block border-2 p-1 m-1 pl-2 border-blue4 focus:ring focus:outline-none focus:ring-blue rounded-md"
                />
              </div>
              <div className="mx-auto  ">
                <label className="text-white" htmlFor="end-date">
                  End Date:
                </label>
                <DatePicker
                  id="end-date"
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="block border-2 p-1 m-1 pl-2 border-blue4 focus:ring focus:outline-none focus:ring-blue rounded-md"
                />
              </div>{' '}
              <button className="bg-blue-500  text-white mt-2 px-4 py-2 rounded">
                Adauga concediu
              </button>
            </div>
          </form>
        </div>{' '}
        <div className="col-span-4 xl:col-span-5 bg-slate-800 rounded-md p-2 md:mt-0 mt-2">
          <p className="text-white text-align center  text-xl text-center mb-2">
            Perioade Concedii{' '}
          </p>
          <table className="table-auto border w-full  rounded-xl border-blue4">
            <thead>
              <tr>
                <th className="px-1 py-2 w-12 text-center text-blue4 border border-white">
                  Nr.
                </th>
                <th className="px-4 py-2 text-blue4 border border-white">
                  Început
                </th>
                <th className="px-4 py-2 border text-blue4 border-white">
                  Final
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.concediu &&
                userData.concediu.map((concediu, index) => (
                  <tr key={index}>
                    <td className="px-4 w-12 text-center text-pink py-2 border  border-white">
                      {index + 1}. 
                    </td>
                    <td className="px-4 py-2 border text-center text-gray-300 border-white">
                      {formatDate(concediu.start)}
                    </td>
                    <td className="px-4 py-2 border text-center text-gray-300 border-white">
                      {formatDate(concediu.end)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
{
  /* <div>
				<button onClick={handleLogout}>Logut</button>
				</div> */
}
export async function getServerSideProps() {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://licenta-concedii.vercel.app'
      : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/getusers`);
  const users = await res.json();
  return { props: { users } };
}
