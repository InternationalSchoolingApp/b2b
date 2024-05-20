"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    amount: 0,
    startDate: "",
    endDate: "",
  });

  const [jsonObject, setJsonObject] = useState({});

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const prizeForEnrollment = 260;
    const targetAmount = parseInt(formData.amount);
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const duration = endDate - startDate;
    const days = duration / (1000 * 60 * 60 * 24);
    const weeks = days / 7;
    const months = days / 30;
    const years = days / 365;
    const numberOfEnrollments = Math.ceil(targetAmount / 260);
    const enrollmentsPerDay = numberOfEnrollments / days;
    const enrollmentsPerWeek = numberOfEnrollments / weeks;
    const enrollmentsPerMonth = numberOfEnrollments / months;
    const enrollmentsPerYear = numberOfEnrollments / years;

    const payoutPerEnrollment = 260;
    const payoutPerDay = payoutPerEnrollment * (numberOfEnrollments / days);
    const payoutPerWeek = payoutPerEnrollment * (numberOfEnrollments / weeks);
    const payoutPerMonth = payoutPerEnrollment * (numberOfEnrollments / months);
    const payoutPerYear = payoutPerEnrollment * (numberOfEnrollments / years);

    if (days >= 1 && days < 7) {
      setJsonObject({
        targetAmount: targetAmount.toFixed(2),
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        enrollmentsPerDay: enrollmentsPerDay.toFixed(2),
        payoutPerDay: payoutPerDay,
      });
    } else if (days >= 7 && days < 30) {
      setJsonObject({
        targetAmount: targetAmount.toFixed(2),
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        enrollmentsPerDay: enrollmentsPerDay.toFixed(2),
        payoutPerDay: payoutPerDay,
        enrollmentsPerWeek: enrollmentsPerWeek.toFixed(2),
        payoutPerWeek: payoutPerWeek,
      });
    } else if (days >= 30 && days < 365) {
      setJsonObject({
        targetAmount: targetAmount.toFixed(2),
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        enrollmentsPerDay: enrollmentsPerDay.toFixed(2),
        payoutPerDay: payoutPerDay,
        enrollmentsPerWeek: enrollmentsPerWeek.toFixed(2),
        payoutPerWeek: payoutPerWeek,
        enrollmentsPerMonth: enrollmentsPerMonth.toFixed(2),
        payoutPerMonth: payoutPerMonth,
      });
    } else {
      setJsonObject({
        targetAmount: targetAmount.toFixed(2),
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        enrollmentsPerDay: enrollmentsPerDay.toFixed(2),
        enrollmentsPerWeek: enrollmentsPerWeek.toFixed(2),
        enrollmentsPerMonth: enrollmentsPerMonth.toFixed(2),
        enrollmentsPerYear: enrollmentsPerYear.toFixed(2),
        payoutPerDay: payoutPerDay,
        payoutPerWeek: payoutPerWeek,
        payoutPerMonth: payoutPerMonth,
        payoutPerYear: payoutPerYear,
      });
    }
    setIsPopupOpen(true);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full md:w-2/5 h-max rounded-xl mb-5 md:mb-0 bg-gray-100 border border-[#007EFF] shadow p-4 flex justify-center items-center">
      {isPopupOpen && (
        <div className="fixed top-0 h-screen w-[100vw] left-0 bg-white/50 backdrop-blur z-40 flex items-center justify-center">
          <div className=" p-4  relative rounded-xl shadow-xl bg-white">
            <div
              className="absolute cursor-pointer text-2xl top-2 right-3"
              onClick={handlePopupClose}
            >
              &times;
            </div>

            <div className="m-5">
              <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                Target Amount : {formData.amount} $
              </p>
              <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                Start Date : {formData.startDate}
              </p>
              <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                End Date : {formData.endDate}
              </p>
              {jsonObject.payoutPerDay && (
                <>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                    Payout Per Day : {jsonObject.payoutPerDay} $
                  </p>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                    Enrollments Per Day : {jsonObject.enrollmentsPerDay}
                  </p>
                </>
              )}
              {jsonObject.payoutPerWeek && (
                <>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                    Payout Per Week : {jsonObject.payoutPerWeek} $
                  </p>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                    Enrollments Per Week : {jsonObject.enrollmentsPerWeek}
                  </p>
                </>
              )}

              {jsonObject.payoutPerMonth && (
                <>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                    Payout Per Month : {jsonObject.payoutPerMonth} $
                  </p>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1">
                    Enrollments Per Month : {jsonObject.enrollmentsPerMonth}
                  </p>
                </>
              )}

              {jsonObject.payoutPerYear && (
                <>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1 mx-3">
                    Payout Per Year : {jsonObject.payoutPerYear} $
                  </p>
                  <p className="text-[#037FFF] font-semibold px-4 py-1 bg-slate-100 rounded-md my-1 mx-3">
                    Enrollments Per Year : {jsonObject.enrollmentsPerYear}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="w-full ">
        <h3 className="text-center mb-2 font-bold text-xl md:text-2xl text-[#007EFF] ">
          Enter Your Target Income
        </h3>
        <h4 className="text-center text-[#5d5d5d] mb-4">
          Commision Calculator
        </h4>
        <form
          className="max-w-sm mx-auto"
          id="incomeForm"
          onSubmit={handleSubmit}
        >
          <div className="grid mb-5 grid-cols-1 items-end  md:grid-cols-2 gap-2">
            <div className="">
              <label
                htmlFor="startDate"
                className="block mb-1 text-xs font-medium text-gray-900 "
              >
                Enter Target Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                onChange={handleChange}
                value={formData.amount}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter Amount"
                required
              />
            </div>
            <div>
              <label
                htmlFor="commision"
                className="block mb-1 text-xs font-medium text-gray-900 "
              >
                Commision per student
              </label>
              <input
                type="text"
                id="commision"
                name="commision"
                disabled
                className="bg-gray-50 border placeholder:text-black disabled border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="10% of Fee"
              />
            </div>
            <div>
              <label
                htmlFor="startDate"
                className="block mb-1 text-xs font-medium text-gray-900 "
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                onChange={handleChange}
                value={formData.startDate}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block mb-1 text-xs font-medium text-gray-900 "
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={handleChange}
                value={formData.endDate}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
