export default function Modal({data, customClassName}: any): JSX.Element {
  return (
    <div className={customClassName}>
      <p>
        { data }
      </p>
    </div>
  )
}