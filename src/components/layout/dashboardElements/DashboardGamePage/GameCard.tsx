import { url } from "inspector";

export default function GameCard({name, image}: any): JSX.Element {
  return (
    <div className="game-card-container displayFlexAndCenter" 
      style={{
        background: `url(${image})`, 
        backgroundPosition: "center", 
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat"
      }}>
      <span>
        { name }
      </span>
    </div>
  )
}
