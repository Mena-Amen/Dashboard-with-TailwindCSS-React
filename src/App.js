import { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import {
  RiArrowDownFill,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from "react-icons/ri";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleCheckChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <div className={darkMode && "dark"}>
      <div className=" text-slate-400 pb-8 dark:bg-darkbg dark:text-slate-300">
        {/* Header */}
        <div className=" bg-bg pb-20 dark:bg-darkbg">
          <div className="container py-9 flex justify-between items-center">
            <div>
              <h1 className=" text-slate-800 dark:text-white font-bold text-3xl">
                Social Media Dashboard
              </h1>
              <span className="text-sm">Total Followers: 11.3568</span>
            </div>
            <div>
              <label className="mr-2 cursor-pointer" htmlFor="checkbox">
                Dark Mode
              </label>
              <span>
                <input
                  className="cursor-pointer"
                  id="checkbox"
                  type="checkbox"
                  onChange={handleCheckChange}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="container -mt-20">
          {/* Main Cards */}
          <div>
            <div>
              <div className="grid grid-cols-4 gap-6 lg:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Card */}
                <div className="card before:bg-facebook">
                  <div className="flex items-center justify-center gap-1 font-bold pb-6">
                    <span className="text-facebook">
                      <AiFillFacebook size={22} />
                    </span>
                    <span>@WWE</span>
                  </div>
                  <h2 className=" text-slate-800 dark:text-white text-6xl">
                    1980
                  </h2>
                  <p className=" font-medium uppercase tracking-[0.25rem]">
                    Followers
                  </p>
                  <div className="flex items-center justify-center gap-1 font-bold pt-6 text-maingreen">
                    <span>
                      <RiArrowUpSFill />
                    </span>
                    <span>Today</span>
                  </div>
                </div>
                {/* Card */}
                <div className="card before:bg-twitter">
                  <div className="flex items-center justify-center gap-1 font-bold pb-6">
                    <span className="text-twitter">
                      <AiFillTwitterSquare size={22} />
                    </span>
                    <span>@AEW</span>
                  </div>
                  <h2 className=" text-slate-800 dark:text-white text-6xl">
                    4520
                  </h2>
                  <p className=" font-medium uppercase tracking-[0.25rem]">
                    Followers
                  </p>
                  <div className="flex items-center justify-center gap-1 font-bold pt-6 text-maingreen">
                    <span>
                      <RiArrowUpSFill />
                    </span>
                    <span>Today</span>
                  </div>
                </div>
                {/* Card */}
                <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500">
                  <div className="flex items-center justify-center gap-1 font-bold pb-6">
                    <span className="text-[#e1306c]">
                      <AiFillInstagram size={22} />
                    </span>
                    <span>@NJPW</span>
                  </div>
                  <h2 className=" text-slate-800 dark:text-white text-6xl">
                    2708
                  </h2>
                  <p className=" font-medium uppercase tracking-[0.25rem]">
                    Followers
                  </p>
                  <div className="flex items-center justify-center gap-1 font-bold pt-6 text-maingreen">
                    <span>
                      <RiArrowUpSFill />
                    </span>
                    <span>Today</span>
                  </div>
                </div>
                {/* Card */}
                <div className="card before:bg-[#ff0000]">
                  <div className="flex items-center justify-center gap-1 font-bold pb-6">
                    <span className="text-[#ff0000]">
                      <AiFillYoutube size={22} />
                    </span>
                    <span>@TNA</span>
                  </div>
                  <h2 className=" text-slate-800 dark:text-white text-6xl">
                    404
                  </h2>
                  <p className=" font-medium uppercase tracking-[0.25rem]">
                    Followers
                  </p>
                  <div className="flex items-center justify-center gap-1 font-bold pt-6 text-rose-700">
                    <span>
                      <RiArrowDownSFill />
                    </span>
                    <span>Today</span>
                  </div>
                </div>
              </div>

              {/* Small Cards */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold"> Overview - Today </h2>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6">
                  {/* Card */}
                  {Array(8)
                    .fill(" ")
                    .map((el) => (
                      <div className="card-sm">
                        <div className="flex items-center justify-between">
                          <h4 className=" font-bold">Pages Views</h4>
                          <AiFillFacebook
                            className=" text-facebook"
                            size={22}
                          />
                        </div>

                        <div className="flex items-center justify-between mt-8">
                          <h3 className=" font-black text-2xl text-slate-800 dark:text-white dark:text-white">
                            {" "}
                            122
                          </h3>
                          <div className="flex items-center gap-1 text-maingreen text-sm">
                            <span>
                              <RiArrowUpSFill />
                            </span>
                            <span>300%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
