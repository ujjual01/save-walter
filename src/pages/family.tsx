import { quotes } from "@libs/data"
import Image from "next/image";

const family = () => {
    return (
    

<div className="grid md:grid-cols-2 p-5 lg:px-24 h-full gap-5">
    
      <div className="textBlock-wrapper">
      <h1 className="textBlock-title text-yellow mb-4 md:text-5xl text-2xl">
            <span className="font-bold text-yellow ">Family & </span>Friends      
      </h1>
            <p className="textBlock-subtitle">Notes from friends and family</p>
      </div>
      <div className="flex flex-col justify-center space-y-3 ">
        {
            quotes.map(quote=>
                <div className="flex p-3 px-6 space-x-3 text-sm md:text-base bg-gray-dark">
                <div className="flex-shrink-0 text-center">
                    <div>
                    <Image src={quote.pictureURL}
                    width={60}
                    height={60}
                    className="rounded-full"
                    objectFit="cover"
                    quality={100}/>
                    </div>
                    <span className="mt-1">{quote.name}</span>
                </div>
                <p>{quote.text}</p>
                </div>
                )
        }
      </div>
    </div>
    )
}

export default family

