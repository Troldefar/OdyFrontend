export default function InputElement(props: any) {
  return (
    <div>
      <input 
        type={props.inputType}
        placeholder={props.ph}
        className="input"
      />
    </div>
  )
}
