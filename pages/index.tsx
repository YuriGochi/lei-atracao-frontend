import Head from 'next/head'
import Image from 'next/image'
import { QueryClient, QueryClientProvider } from 'react-query'
import styles from '../styles/Home.module.css'
import StarWars from './components/UseQueryStarWars'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <StarWars></StarWars>
    </QueryClientProvider>
  )
}
