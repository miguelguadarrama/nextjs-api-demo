import Loader from '@/components/loader';
import { useState } from "react";
import ShowAmount from './showAmount';
import ShowCountries from './showCountries';
import TableFilters from './tableFilters';
import Link from 'next/link';

const countOptions = [10, 20, 50, 100, -1];

const ProjectList = ({ data }) => {
  //count will determine how many items are displayed in the table
  const [count, setCount] = useState(countOptions[0]);
  //query will be used to filter the project list
  const [query, setQuery] = useState('')

  if (!data) {
    // if data is not available, show a loading spinner
    return <Loader />
  }

  const filteredProjects = data.filter((project) => {
    if (query === '') {
      return true
    }
    const _q = query.toLowerCase()
    return project.ProjectName.toLowerCase().indexOf(_q) > -1 ||
      project.ApprovedRef.toLowerCase().indexOf(_q) > -1 ||
      project.Entities.map(k => k.Acronym).join(', ').toLowerCase().indexOf(_q) > -1 ||
      project.Countries.map(k => k.CountryName).join(', ').toLowerCase().indexOf(_q) > -1
  });

  return (
    <div>
      <TableFilters setQuery={setQuery} setCount={setCount} count={count} query={query} data={data} countOptions={countOptions} />
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>Ref.</th>
            <th>Project Name</th>
            <th>Accredited Entity</th>
            <th>Countries</th>
            <th>GCF Financing</th>
            <th>Co-financing</th>
            <th>Total Financing</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.slice(0, count).map((project) => (
            <tr key={project.ProjectsID}>
              <td>{project.ApprovedRef}</td>
              <td className="text-truncate" style={{ maxWidth: '300px' }}>
                <Link href={`/project/${project.ApprovedRef}`}>{project.ProjectName}</Link>
              </td>
              <td>{project.Entities.map(k => k.Acronym).join(', ')}</td>
              <td><ShowCountries data={project.Countries} /></td>
              <td><ShowAmount amount={project.TotalGCFFunding} /></td>
              <td><ShowAmount amount={project.TotalCoFinancing} /></td>
              <td><ShowAmount amount={project.TotalValue} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <p className="text-muted">Showing {filteredProjects.slice(0, count).length} of {data.length} projects</p>
      </div>
    </div>
  );
}


export default ProjectList;