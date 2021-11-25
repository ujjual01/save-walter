function stats() {
    return (
        <div className="grid md:grid-cols-2 p-5 lg:px-24 h-full">
            <div className="flex flex-col justify-center space-y-3">
      <div className="textBlock-wrapper bg-gray-dark w-10/12 mx-auto md:py-14 items-center">
        <h1 className="textBlock-title text-yellow mb-4 md:text-5xl text-2xl">
          Total Donations
        </h1>
        <span className="text-2xl px-6 py-4 md:text-3xl bg-gray-light ">1205</span>
          </div>
          </div>
      <div className="flex flex-col justify-center space-y-3 text-center">
        <h1 className="textBlock-title text-yellow mb-4 md:text-5xl text-2xl">Last 5 donations</h1>
        {
         [...Array(5)].map(donation=>
         <div className="flex bg-gray-dark justify-between px-6 text-xl py-4">
             <span>Saul</span>
             <span>1</span>
         </div>)
        }
      </div>
    </div>
    )
}

export default stats
