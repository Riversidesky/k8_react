import RDiv1 from "./RDiv1"
import { RecoilRoot } from "recoil"

export default function RecoilMain() {
  return (
    <RecoilRoot>
      <div className="w-full h-full flex flex-col justify-center items-center">
          <RDiv1 />
      </div>
    </RecoilRoot>
  )
}
