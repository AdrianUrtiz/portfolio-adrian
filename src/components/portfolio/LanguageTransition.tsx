type LanguageTransitionProps = {
  isChanging: boolean
}

export const LanguageTransition = ({ isChanging }: LanguageTransitionProps) => {
  return (
    <div aria-hidden="true" className={`language-transition ${isChanging ? 'is-active' : ''}`} />
  )
}
