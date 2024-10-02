import MyBoxFlag from "./MyBoxFlag"

export default function MyBox() {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
        <MyBoxFlag color = "blue"/>
        <MyBoxFlag color = "orange"/>
        <MyBoxFlag color = "yellow"/>
        <MyBoxFlag color = "pink"/>
        </div>
    </div>
  )
}
