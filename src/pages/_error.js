import React, { Component } from "react";
import Router from "next/router";
import Link from 'next/link'
import { useRouter } from 'next/router'
// export default class _error extends Component {
import style from '../static/styles/error.module.scss'

function Error({ statusCode }) {
  const router = useRouter()
  var response
  switch (statusCode) {
    case 200: // Also display a 404 if someone requests /_error explicitly
    case 404:
      response = <h1 className={style.h1}>Page not Found!</h1>
      break
    case 500:
      response = (
        <div className='pt-5 text-center'>
          <h1>Internal Server Error</h1>
          <p>An internal server error occurred.</p>
        </div>
      )
      break
    default:
      response = (
        <div>
          <h1>HTTP {statusCode} Error</h1>
          <p>
            An <strong>HTTP {statusCode}</strong> error occurred while trying to access{' '}
          </p>
        </div>
      )
  }
  React.useEffect(() => {
    // Router.push("/");
  }, [])

  // return (<div className="row">
  //   <div className="col-6">
  //   </div>
  //   <div className="col-6">
  //     <div className="message-box">
  //       <h1>404</h1>
  //       <p>Page not found</p>
  //       <div className="buttons-con">
  //         <div className="action-link-wrap">
  //           {/* <a onclick="history.back(-1)" className="link-button link-back-button">Go Back</a>
  //         <a href="/" className="link-button">Go to Home Page</a> */}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>);
  return (
      <div className='pt-5 text-center noselect'>
        <div className={`${style.face}`}>
          <div className={style.band}>
            <div className={style.red}></div>
            <div className={style.white}></div>
            <div className={style.blue}></div>
          </div>
          <div className={style.eyes}></div>
          <div className={style.dimples}></div>
          <div className={style.mouth}></div>
        </div>

        {response}

        <a href='/' className="text-decoration-none">
          <div className={style.btnErr}>Go to Home</div>
        </a>
      </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
