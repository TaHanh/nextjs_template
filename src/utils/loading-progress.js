import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress'
import 'nprogress/nprogress.css'

export default function loadingProgress() {
  NProgress.configure({ showSpinner: false });
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
}
// Router.events.on('routeChangeStart', handleStart)
// Router.events.on('routeChangeComplete', handleComplete)
// Router.events.on('routeChangeError', handleComplete)