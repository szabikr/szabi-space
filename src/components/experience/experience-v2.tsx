import ExperienceHeader from './experience-header'
import ExperienceBodyA from './experience-body-a'
import ExperienceBodyB from './experience-body-b'
import { ExperienceProps } from '../../types/props'

export default function ExperienceV2({
  experiences,
  openByDefault,
}: ExperienceProps) {
  const exp = experiences.find((e) => e.id === openByDefault)
  return (
    <section>
      <h3>Professional Experience</h3>
      <ExperienceHeader jobs={exp.jobs} showYear={true} />
      <ExperienceBodyA jobs={exp.jobs} />
    </section>
  )
}
