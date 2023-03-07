// Write your code here
import './index.css'

const TabItems = props => {
  const {tabsList, onClickingTabs, isTab} = props
  const {displayText, tabId} = tabsList
  const ChangeTab = () => {
    onClickingTabs(tabId)
  }
  const stateTrue = isTab ? 'tab-color-true' : ''
  return (
    <li className="list-style">
      <button
        className={`button-style ${stateTrue}`}
        type="button"
        onClick={ChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
