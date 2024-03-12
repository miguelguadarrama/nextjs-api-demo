//function to use the JS Internationalization API to format numbers as currency
const ShowAmount = ({ amount, align = 'end' }) => {
  if (!amount) {
    return null
  }

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount)

  return (
    <p className={`m-0 text-${align}`}>{formattedAmount}</p>
  )
}

export default ShowAmount;