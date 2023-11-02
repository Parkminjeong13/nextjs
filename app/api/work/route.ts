import { NextResponse } from "next/server";

interface workItem {
    img: string;
    descTitle: string;
    desc: string;
    keyword: string[];
    color: string[];
    font: string;
    tools: string[];
    date: string;
    contribution: string;
    type: string;
    origianl ?: string;
    create: string;
    git: string;
}
interface workData{
    data: workItem[];
}
export async function GET() : Promise<NextResponse>{
    const data :workItem[]= [
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩1",
            desc: "xxxx 사이트 클론 코딩1",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩2",
            desc: "xxxx 사이트 클론 코딩2",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Project",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩3",
            desc: "xxxx 사이트 클론 코딩3",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Webapp",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩4",
            desc: "xxxx 사이트 클론 코딩4",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩5",
            desc: "xxxx 사이트 클론 코딩5",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Project",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩6",
            desc: "xxxx 사이트 클론 코딩6",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Webapp",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩7",
            desc: "xxxx 사이트 클론 코딩7",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩8",
            desc: "xxxx 사이트 클론 코딩8",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Project",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩9",
            desc: "xxxx 사이트 클론 코딩9",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Webapp",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxxx 사이트 클론코딩10",
            desc: "xxxx 사이트 클론 코딩10",
            keyword: ["#심플", "#깔끔", "#반응형"],
            color: ["orange", "orangered", "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma", "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Webapp",
            origianl: "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
    ]
    return NextResponse.json({data} as workData);
}