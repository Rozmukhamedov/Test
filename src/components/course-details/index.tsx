import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Breadcrumb
        title={`${data?.title}`}
        subtitle={`${data?.course_name}`}
        isDbbl={`Course`}
      />
      <CourseDetailsArea data={data}/>
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
