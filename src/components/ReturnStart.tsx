
import './returnStart.css'
export const ReturnStart = () => {
  return (

    <a
      className='

        arrow__start
        fixed 
        bottom-5 right-5
        md:bottom-20 p-2 md:right-20 
        rounded-md border-[1px] border-white
        hover:bg-white hover:text-black
        '
      href='#'
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M16 9l-4 -4" />
        <path d="M8 9l4 -4" />
      </svg>

    </a>
  )
}
