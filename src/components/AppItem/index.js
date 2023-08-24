// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  return (
    <li className="list-app-item">
      <img src={appItem.imageUrl} alt={appItem.appName} />
      <p>{appItem.appName}</p>
    </li>
  )
}

export default AppItem
