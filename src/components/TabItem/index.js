// Write your code here
import './index.css'

const TabItem = props => {
  const {item, changeCategory} = props

  const callToChangeCategory = () => {
    changeCategory(item.tabId)
  }
  return (
    <li className="list-item-con">
      <button type="button" onClick={callToChangeCategory}>
        {item.displayText}
      </button>
    </li>
  )
}

export default TabItem
