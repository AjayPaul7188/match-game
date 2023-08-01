import './index.css'

const TabsPanel = props => {
  const {tabDetails, onClickTab, selectedTabId} = props
  const {tabId, displayText} = tabDetails

  const onTabSelect = () => {
    onClickTab(tabId)
  }

  const tabClass = tabId === selectedTabId ? 'selectedTab' : 'eachTab'

  return (
    <li>
      <button className={tabClass} type="button" onClick={onTabSelect}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsPanel
