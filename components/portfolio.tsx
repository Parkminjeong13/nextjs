'use client'
import { useEffect, useState } from "react";


interface PortfolioItem {
    img: string;
    title: string;
    desc: string;
    skill: string;
    contribution: string;
    period: string;
    view: string;
    git: string;
    type: string;
}

export default function Portfolio(){


    const [list, setList] = useState<PortfolioItem[]>([]);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch("/api/portfolio")
                const data = await res.json();
                setList(data.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return(
        <>
            <div className="p-10 w-9/10 box-border m-10 auto">
                <div className="flex flex-wrap gap-2">
                    {
                        list.map((e, i) => {
                            return (
                                <div className={`flex flex-col w-full border border-gray-300 text-center mb-10 box-border`}>
                                    <div className={`w-full aspect-w-3 aspect-h-2 bg-cover bg-center cursor-pointer order-${(i % 2 === 0 ? '2' : '1')}`} style={{ backgroundImage: `url(${e.img})` }} />
                                    <div className={`p-10 order-${(i % 2 === 0 ? '1' : '2')} m-10 auto`}>
                                        <h3 className="mb-6">{e.title}</h3>
                                        <p>{e.desc}</p>
                                        <p className="mt-3"><span className="font-bold">소요기간 : </span>{e.period}</p>
                                        <p><span className="font-bold">기여도 : </span>{e.contribution}</p>
                                        <p><span className="font-bold">스킬 : </span>{e.skill}</p>
                                        <div className="flex justify-center">
                                            <div className="m-2 p-2 bg-gray-300 rounded-md">보러가기</div>
                                            <div className="m-2 p-2 bg-gray-300 rounded-md">GitHub</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}