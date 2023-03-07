import { useState } from 'react'

export default function Accordion() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-header">
          <h5>Software Engineer @ BJSS</h5>
          <div>
            <button
              className="primary"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
          </div>
        </div>
        <div className={isCollapsed ? 'collapsed' : ''}>
          <p>
            <strong>Content one:</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla suscipit lacinia faucibus.
            Phasellus massa risus, consequat eget facilisis sit amet, ornare sed
            ante. Aliquam auctor lacus lacus, id consequat nunc sagittis
            commodo. Aenean sed lacus viverra, ullamcorper neque a, vulputate
            dui. Mauris nec metus sapien. Nam consectetur fermentum orci ut
            euismod. Integer ultricies metus sit amet lacinia pharetra. Etiam
            sed ex consequat, mollis eros vitae, efficitur tellus. Quisque
            ullamcorper euismod orci eu imperdiet. Maecenas mollis blandit
            sapien a mollis.
          </p>
        </div>
      </div>
      <div>
        <h4>Title Two</h4>
        <div>
          <p>
            <strong>Content two:</strong> Quisque a ante aliquam neque convallis
            hendrerit vitae a magna. Mauris auctor vehicula nisl, nec viverra
            neque pulvinar ac. Morbi ut facilisis arcu, id bibendum ipsum. Etiam
            pharetra aliquam fermentum. Donec fringilla non augue sodales
            rutrum. Sed in auctor augue, nec egestas diam. Proin sed ornare sem,
            non fermentum elit. Vivamus dignissim tellus nec nunc accumsan, nec
            blandit arcu imperdiet. Morbi mattis mattis lectus, ut euismod felis
            dignissim ut.
          </p>
        </div>
      </div>
      <div>
        <h4>Title Three</h4>
        <div>
          <p>
            <strong>Content three:</strong> Pellentesque sed convallis ex, sit
            amet viverra massa. Ut nibh erat, scelerisque at rutrum ut, rhoncus
            a nulla. Donec congue vel nunc eu tempor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. In hac habitasse platea dictumst.
            Fusce a nunc maximus, fermentum purus at, mollis nibh. Maecenas eget
            eros fringilla, blandit nibh quis, fringilla massa. Duis dictum
            consequat ex ac auctor.
          </p>
        </div>
      </div>
    </div>
  )
}
