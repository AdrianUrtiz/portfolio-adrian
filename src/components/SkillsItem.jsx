function SkillsItem({ tag, children }) {
  return (
    <span
      className={`text-sm md:text-base ${tag.className} cursor-pointer py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out`}>
      {children}
    </span>
  )
}

export default SkillsItem
