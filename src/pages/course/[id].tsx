import React, { useEffect } from "react";
import SEO from "../../common/seo";
import CourseDetails from "../../components/course/1/";
import WrapperFour from "../../layout/wrapper-4";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/${params?.id}/`);
  console.log("code 9", res);
  if (res?.status == 404) {
    return {
      props: {
        data: "404",
      },
    };
  }

  const data = await res.json();
  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

const index = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    if (data == 404) {
      router.push("/dashboard");
    }
  }, [data == 404]);

  return (
    <WrapperFour>
      <SEO pageTitle={data?.title} description={data?.description} />
      <CourseDetails data={data} />
    </WrapperFour>
  );
};

export default index;
