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
            <div className="p-20 w-9/10 mx-auto box-border my-10">
                <div className="flex flex-wrap gap-2">
                    {
                        list.map((e, i) => {
                            return (
                                <div key={i} className={`flex flex-col w-[32.5%] border border-gray-300 text-center mb-10 box-border`}>
                                    <div className="w-full cursor-pointer bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${e.img})`, aspectRatio: '3 / 2'}} />
                                    <div className="p-8 w-full mt-5">
                                        <h3 className="mb-6">{e.title}</h3>
                                        <p>{e.desc}</p>
                                        <p className="mt-3"><span className="font-bold">소요기간 : </span>{e.period}</p>
                                        <p className="mt-3"><span className="font-bold">기여도 : </span>{e.contribution}</p>
                                        <p className="mt-3"><span className="font-bold">스킬 : </span>{e.skill}</p>
                                        <div className="flex justify-center mt-5">
                                            <div className="m-2 p-2 bg-gray-300 rounded-lg">보러가기</div>
                                            <div className="m-2 p-2 bg-gray-300 rounded-lg">GitHub</div>
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