export default function Button(props: any) {
  return (
    <div>
      <button
        className="btn"
        type="submit"
      >
        { props.text }
      </button>
    </div>
  )
}
