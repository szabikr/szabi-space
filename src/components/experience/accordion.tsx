import { useState } from 'react'
import { AccordionProps } from '../../types/props'

export default function Accordion({ items, openByDefault }: AccordionProps) {
  const [show, setShow] = useState(openByDefault)

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
          <div
            className={`accordion-body ${item.id == show ? '' : 'collapsed'}`}
          >
            {item.body()}
          </div>
        </div>
      ))}
    </div>
  )
}
