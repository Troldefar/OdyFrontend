export default function Modal({data, customClassName}: any): JSX.Element {
  return (
    <div className={customClassName}>
      { data }
    </div>
  )
}