import React, {Component} from 'react'
import styles from './index.scss'

class Notify extends Component {
  render() {
    const data = this.props.data

    if (!data.length)
      return null

    return (
      <div className={styles.Notify}>
        <div className={styles.ItemList}>
            <div className={styles.listWrap}>
            {data.map((item, index) => {
              let delay = item.delay || 3000
                  delay = item.delay === 0 ? 0 : item.delay
              delay !== 0 && setTimeout( () => item.__remove && item.__remove(item), delay)
              return (
                <div key={index} className={styles.Item + ' ' + styles[item.type]}>
                  {item.__remove && item.showClose ? <span onClick={() => item.__remove(item)}>×</span> : null}
                  <p>{item.text}</p>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Notify
