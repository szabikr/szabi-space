import { useState } from 'react'
import { AccordionProps } from '../../types/props'

const MOST_IMPORTANT = '77eb3531-4b82-427a-8947-cb26791ff4f9'

export default function Accordion({ items }: AccordionProps) {
  const [show, setShow] = useState(MOST_IMPORTANT)

  const toggleItem = (id: string) => (show === id ? setShow(null) : setShow(id))

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header">
            {item.header(item.id != show)}
            <div>
              <button className="primary" onClick={() => toggleItem(item.id)}>
                {item.id === show ? (
                  <i className="arrow up" />
                ) : (
                  <i className="arrow down" />
                )}
              </button>
            </div>
          </div>
          <div className={item.id == show ? '' : 'collapsed'}>
            {item.body()}
          </div>
        </div>
      ))}
    </div>
  )
}
