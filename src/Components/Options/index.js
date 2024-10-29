import './index.css'

const Options = props => {
  const {each} = props
  const {capitalDisplayText, id} = each
  return <option value={id}>{capitalDisplayText}</option>
}
export default Options
