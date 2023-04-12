import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Daxil ol</h3>
              <h1>Mənim Hesabım</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>İstifadəçi adı və ya e-poçt ünvanı</span>
            <input type='text' required />
            <span>parol * </span>
            <input type='parol' required />
            <button className='button'>Daxil ol </button>
          </form>
        </div>
      </section>
    </>
  )
}