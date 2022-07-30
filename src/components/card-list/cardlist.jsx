import { Card } from '../card/card'
import './cardlist.sass'

export const CardList = (props) => {
  return (
    <>
      {props.students.length === 0 ? (
        <div className='card-notfound'>
          <h2>☹️ No students found</h2>
        </div>
      ) : (
        <div className='card-list'>
          {props.students.map((student) => (
            <Card key={student.id} student={student} />
          ))}
        </div>
      )}
    </>
  )
}
