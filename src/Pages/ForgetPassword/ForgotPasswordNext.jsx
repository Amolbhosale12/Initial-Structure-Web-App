import React from 'react'
import './Style.css'

const ForgotPasswordNext = () => {
  return (

    <div className='row g-0 forgot-password-next justify-content-center'>
        <div className='forgot-password-next-container mt-4 mt-sm-5  col-10 col-sm-4 p-4 p-sm-5'>
            <div className='forgot-password-next-collections '>
                <div className='text-center forgot-password-next-label'>
                    <label htmlFor="">Reset Password</label>
                </div>
                <div className='mt-3 mt-sm-4'>
                    <form action="">
                        <div>
                            <div className='form-floating'>
                            <input type="text" className='form-control' id='forgot-password-next-label' placeholder='OTP' />
                            <label htmlFor="forgot-password-next-label">OTP</label>
                            </div>
                        </div>
                        <div className='mt-2 mt-sm-2'>
                            <div className='form-floating'>
                            <input type="text" className='form-control' placeholder='Create Password'/>
                            <label htmlFor="">Create Password</label>
                            </div>
                        </div>
                        <div className='mt-2 mt-sm-2'>
                            <div className='form-floating'>
                            <input type="text" className='form-control' placeholder='Confirm Password'/>
                            <label htmlFor="">Confirm Password</label>
                            </div>
                        </div>
                        <div className='text-center mt-2 mt-sm-4'>
                            <button className='submit-btn btn bg-primary'>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordNext
