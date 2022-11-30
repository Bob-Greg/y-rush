import React, {useState} from 'react';
import clock from './alarm-clock.svg'

namespace App {
  export function dims(): dim {
    return {width: window.innerWidth, height: window.innerHeight}
  }

  export function minDim(): number {
    return Math.min(dims().width, dims().height)
  }

  export function remToPx(rem: number) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  type dim = {
    width: number,
    height: number
  }

  function AlarmClock() {
    const [_dims, set_dims] = useState({width: 0, height: 0} as dim)

    React.useEffect(function () {
      function resize() {
        const width = Math.min(256, minDim() / 4)
        const height = Math.min(256, minDim() / 4)
        set_dims({width: width, height: height})
        console.log("resize")
      }
      window.addEventListener("resize", resize)
      resize()
    }, [])

    return (
      <>
        <img style={{
          position: "absolute",
          top: dims().height / 2 - _dims.height / 2,
          left: dims().width / 2 - _dims.width / 2,
          width: _dims.width,
          height: _dims.height
        }} alt={"can't find it!"} src={clock}/>
        <div style={{
          position: "absolute",
          top: dims().height / 2 + _dims.height / 1.7,
          left: dims().width / 2 - _dims.width / 2,
          width: _dims.width,
          height: remToPx(2.25)
        }} className={"rubik text-4xl text-center"}>
          yRush?
        </div>
        <div style={{
          position: "absolute",
          top: dims().height / 2 + _dims.height,
          left: dims().width / 2 - _dims.width,
          width: _dims.width * 2,
          height: remToPx(1.5) * 2
        }} className={"text-2xl text-center text-gray-500"}>
          you don't have to!
        </div>
      </>
    )
  }

  type OneGuyProps = {
    name: string,
    desc: string
  }

  function OneGuy(props: OneGuyProps) {
    return (
      <div className={"bg-cyan-300 p-4 rounded-2xl"}>
        <div>
          {props.name}
        </div>
        <div className={"text-gray-500"}>
          {props.desc}
        </div>
      </div>
    )
  }

  function Greets() {
    return (
      <div className={"w-screen h-screen"}>
        <div className={"grid grid-cols-1 place-items-center content-center gap-y-12 w-screen h-screen"}>
          <div className={"text-center text-3xl"}>
            The Team:
          </div>
          <div className={"grid grid-cols-4 place-items-center gap-7 w-75pc"}>
            <OneGuy name={"Vaivas"} desc={"How does one spell Ramesh?"}/>
            <OneGuy name={"Michael"} desc={"I don't know what I'm doing"}/>
            <OneGuy name={"Rushil Verma"} desc={"I don't know if I spelled that right"}/>
            <OneGuy name={"Aaryan Reddy Polepalli"} desc={"Did I do that right?"}/>
          </div>
        </div>
      </div>
    )
  }

  export function App() {
    return (
      <div className={"rubik"}>
        {/* first page (top) */}
        <div className={"w-screen h-screen"}>
          <AlarmClock/>
        </div>
        {/* second page (info) */}
        <div className={"w-screen h-screen bg-cyan-100"}>
          <Greets/>
        </div>
      </div>
    );
  }
}

export default App.App;
