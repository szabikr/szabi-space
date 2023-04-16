import { useEffect, useState, useRef } from 'react'
import { AccordionProps } from '../../types/props'

export default function Accordion({ items, openByDefault }: AccordionProps) {
  const [show, setShow] = useState(openByDefault)
  const accordionRef = useRef(null)
  const didMount = useRef(false)

  const toggleItem = (id: string) => (show === id ? setShow(null) : setShow(id))

  useEffect(() => {
    // Do not run on first render
    if (!didMount.current) {
      didMount.current = true
      return
    }

    if (show === null) {
      return
    }

    const accordionNode = accordionRef.current
    const itemNode = accordionNode.querySelector(`#accordion-item-${show}`)
    itemNode.scrollIntoView({ behavior: 'smooth' })
  }, [show])

  return (
    <div className="accordion" ref={accordionRef}>
      {items.map((item) => (
        <div
          key={item.id}
          id={`accordion-item-${item.id}`}
          className="accordion-item"
        >
          <div className="accordion-header">
            {item.header(item.id != show)}
            <div>
              <button className="button" onClick={() => toggleItem(item.id)}>
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
