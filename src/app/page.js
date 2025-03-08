import HomePage from "@/components/HomePage"
import Layout from "@/app/layout/Layout"
import { oblong, sans, yekan } from "@/utils/fonts"

export default function Home() {
  return (
    <Layout className={sans.className}>
      <HomePage />
    </Layout>
  )
}
