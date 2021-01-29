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

const PageTitle = styled.h1`
  text-indent: -99999px;
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 242px;
  background-image: url('/title.svg');
  background-size: 100%;
  background-repeat: no-repeat;
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
        <PageTitle>Bavaria Ipsum</PageTitle>
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
    </div>
  )
}

export default Home
