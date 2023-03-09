import { useState } from 'react'

export default function Accordion({ items }) {
  const [show, setShow] = useState(
    expandItem(
      items.reduce(
        (result, item) => ({
          ...result,
          [item.id]: COLLAPSED,
        }),
        {},
      ),
      MOST_IMPORTANT,
    ),
  )

  const toggleItem = (id) =>
    show[id] === EXPANDED
      ? setShow({
          ...show,
          [id]: COLLAPSED,
        })
      : setShow(expandItem(show, id))

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header">
            {item.header()}
            <div>
              <button className="primary" onClick={() => toggleItem(item.id)}>
                {show[item.id] ? (
                  <i className="arrow up" />
                ) : (
                  <i className="arrow down" />
                )}
              </button>
            </div>
          </div>
          <div className={show[item.id] ? '' : 'collapsed'}>{item.body()}</div>
        </div>
      ))}
    </div>
  )
}

const MOST_IMPORTANT = '77eb3531-4b82-427a-8947-cb26791ff4f9'
const EXPANDED = true
const COLLAPSED = false

const expandItem = (items, id) =>
  Object.keys(items).reduce((result, itemId) => {
    if (itemId === id) {
      return {
        ...result,
        [itemId]: EXPANDED,
      }
    }
    return {
      ...result,
      [itemId]: COLLAPSED,
    }
  }, {})
