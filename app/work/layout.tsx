import Portfolio from "@/components/portfolio";

export default function Layout(props:{children: React.ReactNode}) {
    return (
        <>
            <Portfolio />
            {props.children}        
        </>
    )
}