function YearScrollspy({ years, onYearClick, activeYear }) {
  console.log(activeYear)
  return (
    <div className="sticky right-0 top-0 z-10 w-12 overflow-auto">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearClick(year)}
          className={`text-s ${year === activeYear ? 'font-bold' : 'font-thin'} block w-full p-1 text-left text-gray-500 hover:font-bold dark:text-gray-400`}
        >
          {year}
        </button>
      ))}
    </div>
  )
}

export default YearScrollspy
