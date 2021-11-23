// import Head from 'next/head';
// import Link from 'next/link';
// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//       </Head>

//       <main>
//      <button className="btn">dfdfs</button>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer>

// <style jsx>{`
//   .container {
//     min-height: 100vh;
//     padding: 0 0.5rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }


//   @media (max-width: 600px) {
//     .grid {
//       width: 100%;
//       flex-direction: column;
//     }
//   }
// `}</style>

// <style jsx global>{`
//   html,
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//       Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//       sans-serif;
//   }

//   * {
//     box-sizing: border-box;
//   }
// `}</style>
//     </div>
//   )
// }
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useRouter } from 'next/dist/client/router';
import { RoutesName } from '../routes/contant';


const mdTheme = createTheme();

function Dashboard() {
  const router = useRouter()
  React.useEffect(() => {
    router.push(RoutesName.ActiveAccount)
  }, [])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;