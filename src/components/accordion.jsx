import { useState } from 'react'

const MOST_IMPORTANT = '77eb3531-4b82-427a-8947-cb26791ff4f9'
const EXPANDED = true
const COLLAPSED = false

// Attempt to make the opperation generic
function expandItem(items, id) {
  return items.reduce((result, item) => {
    if (item.id === id) {
      return {
        ...result,
        [item.id]: EXPANDED,
      }
    }
    return {
      ...result,
      [item.id]: COLLAPSED,
    }
  }, {})
}

export default function Accordion() {
  const items = [
    {
      id: '77eb3531-4b82-427a-8947-cb26791ff4f9',
      header: () => <h5>Software Engineer @ BJSS</h5>,
      body: () => (
        <p>
          <strong>Content one:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla suscipit lacinia faucibus. Phasellus massa
          risus, consequat eget facilisis sit amet, ornare sed ante. Aliquam
          auctor lacus lacus, id consequat nunc sagittis commodo. Aenean sed
          lacus viverra, ullamcorper neque a, vulputate dui. Mauris nec metus
          sapien. Nam consectetur fermentum orci ut euismod. Integer ultricies
          metus sit amet lacinia pharetra. Etiam sed ex consequat, mollis eros
          vitae, efficitur tellus. Quisque ullamcorper euismod orci eu
          imperdiet. Maecenas mollis blandit sapien a mollis.
        </p>
      ),
    },
    {
      id: '4a6ef2dd-f855-4691-88eb-813126097aff',
      header: () => <h5>Full Stack Developer @ RightIndem</h5>,
      body: () => (
        <p>
          <strong>Content two:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla suscipit lacinia faucibus. Phasellus massa
          risus, consequat eget facilisis sit amet, ornare sed ante. Aliquam
          auctor lacus lacus, id consequat nunc sagittis commodo. Aenean sed
          lacus viverra, ullamcorper neque a, vulputate dui. Mauris nec metus
          sapien. Nam consectetur fermentum orci ut euismod. Integer ultricies
          metus sit amet lacinia pharetra. Etiam sed ex consequat, mollis eros
          vitae, efficitur tellus. Quisque ullamcorper euismod orci eu
          imperdiet. Maecenas mollis blandit sapien a mollis.
        </p>
      ),
    },
    {
      id: '6ac40bf0-4ee2-4562-85b6-7d9a5904b9cd',
      header: () => <h5>Co-Founder @ Wraptime</h5>,
      body: () => (
        <p>
          <strong>Content three:</strong> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla suscipit lacinia faucibus.
          Phasellus massa risus, consequat eget facilisis sit amet, ornare sed
          ante. Aliquam auctor lacus lacus, id consequat nunc sagittis commodo.
          Aenean sed lacus viverra, ullamcorper neque a, vulputate dui. Mauris
          nec metus sapien. Nam consectetur fermentum orci ut euismod. Integer
          ultricies metus sit amet lacinia pharetra. Etiam sed ex consequat,
          mollis eros vitae, efficitur tellus. Quisque ullamcorper euismod orci
          eu imperdiet. Maecenas mollis blandit sapien a mollis.
        </p>
      ),
    },
  ]

  const [show, setShow] = useState(
    items.reduce((result, item) => {
      if (item.id === MOST_IMPORTANT) {
        return {
          ...result,
          [item.id]: EXPANDED,
        }
      }
      return {
        ...result,
        [item.id]: COLLAPSED,
      }
    }, {}),
  )

  const toggleItem = (id) => {
    const currentItemState = show[id]
    if (currentItemState === EXPANDED) {
      setShow({
        ...show,
        [id]: COLLAPSED,
      })
    } else {
      setShow(
        Object.keys(show).reduce((result, itemId) => {
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
        }, {}),
      )
    }
  }

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header">
            {item.header()}
            <div>
              <button className="primary" onClick={() => toggleItem(item.id)}>
                {show[item.id] ? 'Collapse' : 'Expand'}
              </button>
            </div>
          </div>
          <div className={show[item.id] ? '' : 'collapsed'}>{item.body()}</div>
        </div>
      ))}
    </div>
  )
}
