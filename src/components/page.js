import PageHeader from "@/components/pageHeader";
import Loader from "@/components/loader";

const Page = ({ title, children, loading }) => {

  return (
    <div className="row">
      <div className="col">
        <PageHeader>{title || 'Loading...'}</PageHeader>
        {loading && <Loader />}
        {!loading && children}
      </div>
    </div>
  );
}

export default Page;