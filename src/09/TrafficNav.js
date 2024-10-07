import TailButton from "../UI/TailButton";

export default function TrafficNav({title, c, sel, setSel}) {
    // const [sel, setSel] = useState()
    // const c = ['차대사람', '차대차', '차량단독', '철길건널목'];
    const handleBtClick = (item) => { //인수전달할때
        setSel(item)
    }
    const tags = c.map(item => <TailButton key={item} caption = {item} color = {item == sel ? 'orange' : 'blue'} handleClick={()=>handleBtClick(item)}/>) //인수전달 화살표함수

    // useEffect(()=>{
    //     console.log(sel)
    // }, [sel])

    return (
    <div className="w-11/12 flex justify-between items-center p-5">
        <div className="font-semibold">교통사고 {title}</div>
        <div>{tags}</div> 
    </div>
  )
}
