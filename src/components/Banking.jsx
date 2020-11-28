import React from "react"
import { useSelector } from "react-redux"

const Banking = () => {
  const accountType = useSelector((state) => state)
  return(
    <div className={`form-group text-center ${accountType.login ? "" : "d-none"}`}>
      <h1>{`${accountType.isSavings ? 'Savings Account' : 'Current Account'}`}</h1>
    </div>
  )
}

export default Banking