import { FunctionComponentFactory, useEffect, useState } from "react"


export const Amount:FunctionComponentFactory<{
    amount:Number,
    setAmount:Function,
    value:Number,
}> = ({amount,setAmount,value}) => {
    return (
        <span className={
        `px-4 py-2 text-lg cursor-pointer bg-gray-light ${amount==value ? "border-2 border-yellow":""}`
        }
        onClick={()=>setAmount(value)}
        >
            {value}$
        </span>
    )
}


const donate = () => {

    const [amount,setAmount] = useState(10);

    const addPaypalScript=()=>{
        const script = document.createElement("script");
        script.src="https://www.paypal.com/sdk/js?client-id=AQ5zpOfhNQpZ9hpNhlOJ5AHOpN0GznyHNK6JswRdifiQM6MNwD37bLv6QYO3UnUFMEeVozmA9L5ETjNu";
        script.type="type/javascript";
        script.async=true;
        document.body.appendChild(script);
    };

    useEffect(() => {
        addPaypalScript();
    }, [])

    return (
        <div className="grid md:grid-cols-2 p-5 lg:px-24 h-full gap-5">
    
      <div className="textBlock-wrapper">
      <h1 className="textBlock-title  mb-4 md:text-6xl text-2xl">
            You can<span className="font-bold text-yellow "> Help</span>      
      </h1>
            <p className="textBlock-subtitle">To save please send your contribution to our fund & keep the series alive</p>
      </div>
      <div className="grid place-items-center">
          <div className="flex flex-col bg-gray-dark space-y-4 px-4 py-6 items-center rounded-mg  w-10/12  mx-auto">
              <h1 className="textBlock-title">Donate Box</h1>
              <p className="textBlock-subtitle">Any amount will be  appreciated</p>
              <div className="flex space-x-10 ">
              <Amount amount={amount} setAmount={setAmount} value={1}/>
            <Amount amount={amount} setAmount={setAmount} value={5}/>
            <Amount amount={amount} setAmount={setAmount} value={10}/>
              </div>
              <button>Paypal button</button>
          </div>
        
      </div>
    </div>
    )
}

export default donate


// AXHh3X9nKo9sawvc6AZ0bWu8Df8acB9DPJ1bptHQGIa_y7BAqFXjsiFyx0w2qVA4NetCixTs3w5V3HrW

