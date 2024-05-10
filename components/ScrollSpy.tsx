function YearScrollspy({ years, onYearClick }) {
  return (
    <div className="sticky right-4 top-16 z-10 w-32 overflow-auto">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearClick(year)}
          className="block w-full p-1 text-right text-xs font-medium hover:font-bold"
        >
          {year}
        </button>
      ))}
    </div>
  )
}

export default YearScrollspy
