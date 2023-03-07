// Write your code here
import './index.css'

const AppItems = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="list-app-style">
      <img src={imageUrl} className="img-app" alt={appName} />
      <p className="para-app">{appName}</p>
    </li>
  )
}
export default AppItems
