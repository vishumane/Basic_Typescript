import React,{useState,useRef} from 'react';


interface person{
    firstName:string
    lastName:string
}

interface props{

        text:string;
        ok?:boolean;
        i?:number;
        fn?:(bob:string)=>string;
        person:person
        handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void

}
interface TextNode{
    text:string
}

export const TextField:React.FC<props>=({handleChange})=> {
    // const [count, setCount] = useState<number|null|undefined|string>(5);
    const[count, setCount] = useState<TextNode>({text:'hello'})
    const inputRef=useRef<HTMLInputElement>(null);
    const divRef=useRef<HTMLInputElement>(null);
    //  setCount({text:'viff'});
console.log(count);
    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}
