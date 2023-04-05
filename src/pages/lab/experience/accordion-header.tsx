export default function AccordionHeaderPage() {
  return (
    <main>
      <div className="accordion-header">
        <div className="accordion-header-title">
          <div>
            <strong>Full-Stack Developer</strong>
          </div>
          <div className="accordion-header-subtitle">
            <div>@ RightIndem</div>
            <div>2017 - 2018</div>
          </div>
        </div>
        <div>
          <button
            className="button"
            onClick={() => console.log('Accordion item clicked')}
          >
            <i className="arrow down" />
          </button>
        </div>
      </div>
    </main>
  )
}
