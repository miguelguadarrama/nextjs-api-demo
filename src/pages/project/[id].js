import { useState, useEffect } from "react";
import ShowAmount from "@/components/showAmount";
import Link from "next/link";
import Page from "@/components/page";
const { useRouter } = require("next/router");

const PageDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/projects/${id}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [id])

  if(!data){
    return <Page loading />
  }

  return (
    <Page title="Project Details">
      <dl>
        <dt>Project Ref.</dt>
        <dd>{data.ApprovedRef}</dd>
        <dt>Project Name</dt>
        <dd>{data.ProjectName}</dd>
        <dt>Entities</dt>
        <dd>{data.Entities.map(k => k.Acronym).join(', ')}</dd>
        <dt>Countries</dt>
        <dd>{data.Countries.map(k => k.CountryName).join(', ')}</dd>
        <dt>GCF Financing</dt>
        <dd>{<ShowAmount align="start" amount={data.TotalGCFFunding} />}</dd>
        <dt>Co-financing</dt>
        <dd>{<ShowAmount align="start" amount={data.TotalCoFinancing} />}</dd>
        <dt>Total Financing</dt>
        <dd>{<ShowAmount align="start" amount={data.TotalValue} />}</dd>
        <dt>Website</dt>
        <dd>
          <a href={`https://www.greenclimate.fund/project/${data.ApprovedRef}`}
            target="_blank"
            rel="noreferrer noopener">Link to Project Website</a>
        </dd>
      </dl>
      <hr />
      <Link href="/">Back to list</Link>
    </Page>
  );
}

export default PageDetails;