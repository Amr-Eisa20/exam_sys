"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getExams } from "@/utils";
import { Exam } from "@/interface";

const ListExamsPage = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const examsFromStorage = getExams();
    setExams(examsFromStorage);
    console.log("Exams from storage:", examsFromStorage);
  }, []);

  return (
    <div className="container mt-10">
      <div className="flex justify-between items-center mx-auto mb-4">
        <h1 className="text-2xl text-black ">Exams</h1>
        <Link href="/exams/new">
          <button className="p-2 bg-gray-800 text-white border rounded-md text-md ">
            Create New Exam
          </button>
        </Link>
      </div>
      {!exams.length ? (
        <div className="text-center container">
          <p className="text-2xl text-red-600 font-semibold">
            No exams found. Please create one.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="border p-4 rounded-md bg-[#e0fbfc] flex justify-between items-center"
            >
              <div>
                <span className="text-black text-2xl cursor-pointer text-1xl font-semibold">
                  {exam.title}
                </span>
                <span className="text-gray-600 block">
                  {exam.description == "" ? "No description" : exam.description}
                </span>
              </div>
              <div>
                <Link href={`/exams/${exam.id}`}>
                  <button className="p-2 bg-gray-800 text-white border rounded-md text-md">
                    View Exam
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListExamsPage;
