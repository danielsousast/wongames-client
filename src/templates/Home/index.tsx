'use client'

import React from 'react'
import * as S from './styles'
import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'
import { Heading } from '@/components/Heading'

export const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        Upcoming
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        Free Games
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)
