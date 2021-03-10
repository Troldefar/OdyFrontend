export default function NumericView() {
  return (
    <div className="grid-item-two grid-item">
      <div className="statsContainer displayFlexAndCenter">
        <h2>
          Games played
        </h2>
        <h1>
          0
        </h1>
      </div>
      <div className="statsContainer displayFlexAndCenter">
        <h2>
          Friends online
        </h2>
        <h1>
          0
        </h1>
      </div>
      <div className="statsContainer displayFlexAndCenter">
        <h2>
          Last logged in
        </h2>
        <h1>
          { new Date().toString().substr(0, 10) }
        </h1>
      </div>
      <div className="statsContainer displayFlexAndCenter">
        <h2>
          Rating
        </h2>
        <h1>
          0
        </h1>
      </div>
    </div>
  )
}
