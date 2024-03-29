import BackToHomeButton from '../../components/common/back-to-home-button'
import ResumeButton from '../../components/common/resume-button'

export default function ComponentLibrary() {
  return (
    <>
      <main>
        <div>
          <h1>Typography</h1>
          <h1>This is an h1 text</h1>
          <h2>This is an h2 text</h2>
          <h3>This is an h3 text</h3>
          <h4>This is an h4 text</h4>
          <h5>This is an h5 text</h5>
          <h6>This is an h6 text</h6>

          <p>
            <strong>This is a paragraph:</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras placerat ex nunc. Etiam vel
            aliquet libero. Phasellus vitae ex sit amet nisl vehicula finibus.
            Nam vel magna lorem. Pellentesque elementum mauris ut erat vehicula,
            at malesuada sapien congue. In molestie dolor a erat ornare
            tincidunt. <em>Emphasized text in paragraph.</em>{' '}
            <strong>Strong text in paragraph.</strong> Quisque at facilisis
            turpis. Sed ac congue diam. Nam et ex porta, bibendum felis quis,
            fermentum dolor. Fusce ut metus sed nibh gravida dictum commodo sit
            amet enim.
          </p>

          <div>
            <strong>bold text</strong>
          </div>

          <div>
            <em>emphasized text</em>
          </div>
        </div>

        <div>
          <h1>Resume</h1>
          <ResumeButton />
        </div>

        <div>
          <h1>Hyperlinks</h1>
          <div>
            <h3>
              <span className="link">:link heading</span>
            </h3>
            <span className="link">:link text</span>
          </div>

          <div>
            <h3>
              <span className="link hover">:hover link heading</span>
            </h3>
            <span className="link hover">:hover link text</span>
          </div>

          <div>
            <h3>
              <span className="link visited">:visited link heading</span>
            </h3>
            <span className="link visited">:visited link text</span>
          </div>

          <div>
            <h3>
              <span className="link visited hover ">
                :hover visited link heading
              </span>
            </h3>
            <span className="link visited hover">:hover visited link text</span>
          </div>

          <div>
            <h3>
              <span className="link active">:active link heading</span>
            </h3>
            <span className="link active">:active link text</span>
          </div>
        </div>

        <div>
          <h1>Return to Home Button</h1>
          <BackToHomeButton />
        </div>
      </main>
    </>
  )
}
