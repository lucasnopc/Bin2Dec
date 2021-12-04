export default function Message({ stateMessage }: { stateMessage: {state: boolean, msg: string} }) {
  return <span className={`${stateMessage.state ? '' : 'hidden'} bg-white p-2 fixed top-2 right-2 opacity-75 hover:opacity-100 text-red-500 font-medium rounded-md`} >
    {stateMessage.state && 
    <>{stateMessage.msg}</>
    }
  </span>
}