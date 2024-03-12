
const PageHeader = ({ children }) => {
  return (
    <div className="page-header mt-5">
      <h1>{children}</h1>
      <hr />
    </div>
  );
}

export default PageHeader;