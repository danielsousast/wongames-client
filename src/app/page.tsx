'use server'

import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import { Home } from '@/templates/Home'

function getHomeData() {
  return {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    upcomingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock
  }
}

export default async function HomePage() {
  const homeData = getHomeData()
  return <Home {...homeData} />
}
