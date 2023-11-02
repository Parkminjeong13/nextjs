import { NextResponse } from "next/server";

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
interface PortfolioData{
    data: PortfolioItem[];
}
export async function GET() : Promise<NextResponse>{
    const data :PortfolioItem[]= [
        {
          "img": "/images/capture/teamprojectMain.png",
          "title": "Hello Vanilla",
          "desc": "초보 개발자들이 재미있고 간편하게 바닐라 스크립트를 학습할 수 있도록 지원하는 교육 커뮤니티 플랫폼 사이트입니다. 사용자들의 활발한 소통을 지원하고자 다양한 댓글 기능을 구현하였습니다.",
          "skill": "HTML, CSS, JavaScript, React",
          "contribution": "20%",
          "period": "30일",
          "view": "https://github.com/the02196/hello_vanilla.git",
          "git": "https://github.com/the02196/hello_vanilla.git",
          "type": "TeamProject"      
        },
        {
          "img": "/images/capture/megabox-main.png",
          "title": "Megabox",
          "desc": "Megabox 클론코딩 페이지입니다.",
          "skill": "HTML, CSS, JavaScript",
          "contribution": "100%",
          "period": "14일",
          "view": "https://github.com/Parkminjeong13/megabox.git",
          "git": "https://github.com/Parkminjeong13/megabox.git",
          "type": "Clone"      
        },    
        {
          "img": "/images/capture/parcel.png",
          "title": "Parcel",
          "desc": "택배 조회 페이지입니다. ",
          "skill": "TypeScript, React",
          "contribution": "100%",
          "period": "2일",
          "view": "https://github.com/Parkminjeong13/parcel.git",
          "git": "https://github.com/Parkminjeong13/parcel.git",
          "type": "ToyProject"       
        },
        {
          "img": "/images/capture/subway.png",
          "title": "Subway",
          "desc": "Subway 클론 코딩 페이지입니다.",
          "skill": "HTML, CSS, JavaScript",
          "contribution": "100%",
          "period": "5일",
          "view": "https://github.com/Parkminjeong13/subway.git",
          "git": "https://github.com/Parkminjeong13/subway.git",
          "type": "Clone"       
        },
        {
          "img": "/images/capture/quiz.png",
          "title": "Quiz",
          "desc": "Quiz 페이지입니다.",
          "skill": "HTML, CSS, JavaScript",
          "contribution": "100%",
          "period": "3일",
          "view": "https://github.com/Parkminjeong13/quiz.git",
          "git": "https://github.com/Parkminjeong13/quiz.git",
          "type": "ToyProject"       
        },
      ]
    return NextResponse.json({data} as PortfolioData)
}