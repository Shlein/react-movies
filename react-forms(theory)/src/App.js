import {Component} from 'react'

class App extends Component {

  state = {
    email: '',
    checkbox: false,
  }

  validateEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      alert('Введите верный email')
    }
    return reg.test(email)
  }

  handleChangeEmail = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleChangeCheckbox = (event) => {
    this.setState({[event.target.name]: event.target.checked})
  }

  validateForm = (event) => {
    event.preventDefault()
    var isValidEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.state.email)
    var isValidCheckbox = this.state.checkbox

    if ((isValidEmail && isValidCheckbox) === true) {
      alert('Вы отправили форму!')
      this.setState({
        email: '',
        checkbox: false
      })
    } else {
      alert('Вы неправильно заполнили форму!')
    }
  }

  render() {

    return (
      <div style={{width: 400, padding: 50, display: 'flex', flexDirection: 'column'}}>
        <input type="email"
               name='email'
               onChange={this.handleChangeEmail}
               placeholder={'email'}/>
        <input
          type="checkbox"
          name='checkbox'
          onClick={this.handleChangeCheckbox}
        />
        <button
          onClick={this.validateForm}
        >
          Send
        </button>
      </div>
    )
  }
}

export default App