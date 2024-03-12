
const ShowCountries = ({ data }) => {
  if (!data || !data.length) {
    return null
  }
  return data[0].CountryName.concat(data.length > 1 ? ` (and ${data.length - 1} more)` : '')
}

export default ShowCountries;