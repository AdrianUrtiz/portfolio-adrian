import { Skills } from '../libs/TagsForSkills'

function SkillsSection() {
  return (
    <div className='w-[95%]  rounded-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
      {Skills.map((skill) =>
        skill.tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-sm md:text-base ${tag.className} py-3 px-4 rounded-xl flex items-center justify-center gap-2`}>
            <tag.icon className='size-4' />
            {tag.name}
          </span>
        ))
      )}
    </div>
  )
}

export default SkillsSection
