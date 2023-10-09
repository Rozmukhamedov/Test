import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";

export async function getServerSideProps() {
  const res = await fetch("https://test-git-master-rozmukhamedov.vercel.app/api/hello/");
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

const index = ({ data }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Epora"} />
      <Home data={data}/>
    </Wrapper>
  );
};

export default index;
