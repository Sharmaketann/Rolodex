import './card.sass'

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        src={`https://joeschmoe.io/api/v1/
        ${props.student.name}`}
        alt={`Monster-${props.student.name}`}
      />
      <h2>{props.student.name}</h2>
      <p>{props.student.currentstatus}</p>
    </div>
  )
}
