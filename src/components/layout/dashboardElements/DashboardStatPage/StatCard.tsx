export default function StatCard({title, text, direction, customClassName}: any): JSX.Element {
  return (
    <div className={`${customClassName} displayFlexAndCenter showStat`}>
      <h4>
        { title }
      </h4>
      <p>
        { text }
      </p>
      <span className="arrow">
        <span className={`mdi mdi-arrow-${direction}-circle ${direction === 'up' ? 'greenColor' : 'crimsonColor'}`}></span>
      </span>
    </div>
  )
}
