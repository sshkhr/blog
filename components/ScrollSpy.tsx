function YearScrollspy({ years, onYearClick }) {
  return (
    <div className="sticky right-0 top-0 z-10 w-9 overflow-auto">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearClick(year)}
          className="block w-full p-1 text-left text-xs font-medium hover:font-bold"
        >
          {year}
        </button>
      ))}
    </div>
  )
}

export default YearScrollspy
