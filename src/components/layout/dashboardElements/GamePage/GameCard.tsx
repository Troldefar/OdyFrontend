export default function GameCard({name, image}: any): JSX.Element {
  return (
    <div className="game-card-container" 
      style={{
        background: `url(${image})`, 
        backgroundPosition: "center", 
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat"
      }}>
      <div className="game-card-span">
        { name }
      </div>
    </div>
  )
}
