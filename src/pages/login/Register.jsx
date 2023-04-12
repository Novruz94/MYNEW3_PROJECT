/* eslint-disable no-unused-vars */
import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"

export const Regsiter = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Qeydiyyatdan keçin</h3>
              <h1>Mənim Hesabım</h1>
            </div>
          </div>

          <form>
            <span>E-poçt ünvanı</span>
            <input type='text' required />
            <span>İstifadəçi adı * </span>
            <input type='text' required />
            <span>parol * </span>
            <input type='text' required />
            <span>Şifrəni təsdiqləyin * </span>
            <input type='text' required />
            <button className='button'>Qeydiyyatdan keçin</button>
          </form>
        </div>
      </section>
    </>
  )
}