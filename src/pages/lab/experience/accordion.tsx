import Accordion from '../../../components/experience/accordion'

const FIRST_ITEM = '77eb3531-4b82-427a-8947-cb26791ff4f9'

export default function AccordionPage() {
  const items = [
    {
      id: FIRST_ITEM,
      header: () => <h5>Title One</h5>,
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
      header: () => <h5>Title Two</h5>,
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
      header: () => <h5>Title Three</h5>,
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

  return (
    <main>
      <Accordion items={items} openByDefault={FIRST_ITEM} />
    </main>
  )
}
