import {Component} from 'react'
import './index.css'
import Options from '../Options'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {currentCountryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    const {target} = event
    const {value} = target
    this.setState({currentCountryId: value})
  }

  render() {
    const {currentCountryId} = this.state
    const selectedCountry = countryAndCapitalsList.filter(
      each => each.id === currentCountryId,
    )
    console.log(selectedCountry)
    return (
      <div className="background-container">
        <div className="capital-container">
          <h1 className="capitals-heading">Countries And Capitals</h1>
          <select
            className="select-input"
            onChange={this.onChangeCapital}
            id="capitalSelect"
          >
            {countryAndCapitalsList.map(each => (
              <Options key={each.id} each={each} />
            ))}
          </select>
          <label className="label" htmlFor="capitalSelect">
            is capital of which country?
          </label>
          <h2 className="country-result">{selectedCountry[0].country}</h2>
        </div>
      </div>
    )
  }
}
export default Capitals
