

export default function Load(){
    return(


      <div className="loader-container">
        <div className='flex-col loader items-center justify-center'>
             <div className='flex flex-col items-center justify-center'>
      <h1 className='caveat-logo text-xl md:text-2xl lg:text-3xl inline'>Archbuild</h1>
      <span className="block text-xs md:text-lg lg:text-xl josefin-sans-p">
        Immutability,transparency
      </span>
      </div>
      <div class="progress"></div>
        </div>
        </div>

    )
}