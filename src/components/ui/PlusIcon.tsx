export const PlusIcon = ({ open }: { open: boolean }) => (
  <span aria-hidden className="relative mt-0.5 block size-5 shrink-0">
    <span className="absolute left-0 top-1/2 h-px w-full bg-hueso" />
    <span
      className={`absolute left-1/2 top-0 h-full w-px bg-hueso transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? 'rotate-90 opacity-0' : ''
      }`}
    />
  </span>
)
