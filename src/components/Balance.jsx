import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Balance = () => {
  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const balance = useSelector((state) => state)

  const handleDeposit = () => {
    dispatch({type: 'DEPOSIT', payload: parseFloat(input)})
    setInput('')
  }
  const handleWithdraw = () => {
    dispatch({type: 'WITHDRAW', payload: parseFloat(input)})
    setInput('')
  }
  const handleCollectInterest = () => {
    dispatch({type: 'COLLECT_INTEREST'})
    setInput('')
  }
  const handleDeleteAccount = () => {
    dispatch({type: 'DELETE_ACCOUNT'})
    setInput('')
  }
  const handleChangeAccount = () => {
    dispatch({type: 'TOGGLE_ACCOUNT'})
    setInput('')
  }

  return(
    <div className={`form-group text-center ${balance.login ? "" : "d-none"}`}>
      <h1>${`${balance.isSavings ? balance.savings : balance.current}`}</h1>
      <input value={input} onChange={
        (e)=>{
          setInput(e.target.value)
          e.preventDefault() 
        }
      } type="text" className="mx-auto form-control w-50" />
      <button disabled={!input} className="btn btn-primary m-2"  onClick={handleDeposit} >Deposit</button>
      <button disabled={!input} className="btn btn-success m-2" onClick={handleWithdraw} >Withdraw</button>
      <button className="btn btn-dark m-2" onClick={handleChangeAccount}>Change Account Type</button>
      <button className="btn btn-secondary m-2" onClick={handleCollectInterest}>Collect Interest</button>
      <button className="btn btn-danger m-2" onClick={handleDeleteAccount}>Delete Account</button>
      
    </div>
  )
}

export default Balance