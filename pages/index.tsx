import Head from 'next/head'
import { useState } from 'react'
import Blindtext from '../components/Blindtext'
import NoSSR from '@mpth/react-no-ssr'
import Slider from '../components/Slider'
import Controls from '../components/Controls'
import Header from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

const Title = styled.h1`
  text-indent: -99999px;
  margin-top: 40px;
  overflow: hidden;
  width: 411px;
  height: 184px;
  background-image: url('/title.svg');
`

type Pros = {
  test?: boolean
}

export const Home = ({ test = false }: Pros): JSX.Element => {
  const [lenght, setLenght] = useState(3)
  const [paragraphs, setParagraphs] = useState(4)
  return (
    <div className="container">
      <Head>
        <title>Bavaria Ipsum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Title>Bavaria Ipsum</Title>
        <Controls>
          <Slider
            label="Wia lang solls sei?"
            value={lenght}
            id="lenght"
            min={1}
            max={7}
            onChange={(value) => setLenght(value ?? 4)}
          ></Slider>
          <Slider
            label="Wia vui mechts ham?"
            value={paragraphs}
            id="paragraphs"
            min={1}
            max={10}
            onChange={(value) => setParagraphs(value ?? 4)}
          ></Slider>
        </Controls>
      </Header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main>
        <div className="blindtext">
          {!test && (
            <NoSSR>
              <Blindtext lenght={lenght} paragraphs={paragraphs}></Blindtext>
            </NoSSR>
          )}
        </div>
      </main>

      <Footer></Footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          text-decoration: none;
          color: #121212;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        p:first-child {
          margin-top: 0;
        }

        p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

export default Home
