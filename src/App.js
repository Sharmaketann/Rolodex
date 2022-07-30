import './App.sass'
import { Component } from 'react'
import { CardList } from './components/card-list/cardlist'
import { SearchBox } from './components/searchbox/searchbox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://my-amigos-api.herokuapp.com/students')
      .then((res) => res.json())
      .then((user) => this.setState({ students: user }))
  }

  render() {
    const { students, searchField } = this.state
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Students Rolodex</h1>
        <SearchBox
          placeholder={'Search students'}
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList students={filteredStudents} />
      </div>
    )
  }
}

export default App
