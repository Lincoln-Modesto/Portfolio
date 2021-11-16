import { useEffect, useState } from 'react'

import { Button, ButtonContact } from '../../components/Button'
import { Title, TitleDark, TitleDescription } from '../../components/Titles'
import { SectionAbout } from '../../components/About'
import { Paragraph } from '../../components/Paragraph'
import { Badge, BadgeTitle } from '../../components/Badge'
import { Subtitle, SubtitleItalic, SubtitleItem } from '../../components/Subtitle'
import { Card } from '../../components/Card'
import { ItemContact } from '../../components/ItemContact'
import { Item } from '../../components/Item'

import Toggle from '../../components/Toggle'
import hero from '../../assets/capa.png'
import mac from '../../assets/mac.png'
import iphone from '../../assets/iPhoneX.png'
import petfood from '../../assets/petfood.png'
import saoquadrado from '../../assets/saoquadrado.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import git from '../../assets/git.png'
import figma from '../../assets/figma.png'
import native from '../../assets/native.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import styled from '../../assets/styled.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import seecon from '../../assets/seecon.png'
import gameplay from '../../assets/gameplay.png'
import plant from '../../assets/plant.png'
import ecofood from '../../assets/ecofood.png'

import './styles.css'
import '../../styles/GlobalStyle.js'

export function Home({ onToggleTheme }) {

  const [date, setDate] = useState({})
  const [visibilityUX, setVisibilityUX] = useState("VER MAIS")
  const [visibilityProjects, setVisibilityProjects] = useState("VER MAIS")

  function handleVisibilityUX() {
    setVisibilityUX(prevState => prevState === "VER MENOS" ? "VER MAIS" : "VER MENOS")
  }

  function handleVisibilityProjects() {
    setVisibilityProjects(prevState => prevState === "VER MENOS" ? "VER MAIS" : "VER MENOS")
  }

  useEffect(() => {
    var data = new Date();
    const hora = data.getHours();
    const minutes = String(data.getMinutes()).padStart(2, "0");

    setDate({ hora, minutes })
  }, [date])

  return (
    <main>
      <section className="hero">
        <div className="contentHero">
          <h1>Lincoln Modesto</h1>
          <TitleDescription children="Desenvolvedor Front-end/Mobile" />
          <a href="https://t.me/Lincolnmodesto" target="_blank" rel="noreferrer">
            <ButtonContact type="button" children="ENTRE EM CONTATO" />
          </a>
        </div>
        <div className="imgHero">
          <img src={hero} alt="hero" loading="lazy"/>
        </div>
      </section>

      <section className="effects">
        <div className="container-toggle">
          <TitleDark children="Dark Mode" />
          <Toggle onToggleTheme={onToggleTheme} />
        </div>
        <div className="container-clock-location">
          <small>Localização:</small>
          <h4>Estância/SE {date?.hora === 0 ? '00' : date?.hora}:{date?.minutes}</h4>
          <div>
            <div></div>
            <h6>Trabalhando agora</h6>
          </div>
        </div>
      </section>

      <SectionAbout className="sectionAbout">
        <Title children="Sobre" />
        <div className="about">
          <div></div>
          <Paragraph children={`Olá 👋, sou o Lincoln.
            Sou graduado em Engenharia civil e durante a conclusão do meu curso, desenvolvi o aplicativo móvel (Java e Android nativo) Reescore Lajes registrado junto ao INPI, que é um software voltado a sanar problemas de dimensionamento e projeto das estruturas provisórias de escoramento de lajes maciças e treliçadas.          
            A partir daí, me apaixonei por tecnologia e programação, e venho estudando e fazendo pequenos projetos desde 2020.
            🚀 Atualmente estou estudando: JavaScript, React JS e React Native, mas também tenho me aventurado em desenvolver aplicações completas, com back-end em Node JS, e banco de dados com MongoDB e Postgres.`} />
        </div>
      </SectionAbout>

      <section className="container">
        <Title children="UX/UI" />
        <div className="ux-container">

          <div id="mulheresDeObra">
            <img src={mac} alt="pc" loading="lazy" />
            <Badge>
              <BadgeTitle children="FIGMA" />
            </Badge>
            <SubtitleItalic children="User Interface" />
            <Subtitle children="Protótipo de alta fidelidade web" />
          </div>

          <div id="cleanHome">
            <img src={iphone} alt="pc" loading="lazy" />
            <Badge>
              <BadgeTitle children="FIGMA" />
            </Badge>
            <SubtitleItalic children="User Interface" />
            <Subtitle children="Protótipo de alta fidelidade mobile" />
          </div>
        </div>
        {visibilityUX === "VER MENOS" &&
          <div className="ux-container">
            <div id="ecofood">
              <img src={ecofood} alt="pc" loading="lazy" />
              <Badge>
                <BadgeTitle children="FIGMA" />
              </Badge>
              <SubtitleItalic children="User Interface" />
              <Subtitle children="Protótipo de alta fidelidade mobile" />
            </div>
          </div>}

        <div className="ux-button">
          <Button children={visibilityUX} onClick={handleVisibilityUX} />
        </div>
      </section>

      <section className="container">
        <Title children="Projetos" />
        <div className="projetosContainer">
          <Card
            href="https://github.com/Lincoln-Modesto/Petfood"
            target="_blank"
            rel="noreferrer">
            <img src={petfood} alt="petfood" loading="lazy" className="imgCard"/>
            <div className="content">
              <TitleDescription children="PETFOOD" />
              <div className="container-badges">
                <Badge>
                  <BadgeTitle children="REACT JS" />
                </Badge>
                <Badge>
                  <BadgeTitle children="REDUX" />
                </Badge>
                <Badge>
                  <BadgeTitle children="NODE JS" />
                </Badge>
                <Badge>
                  <BadgeTitle children="MONGODB" />
                </Badge>
              </div>
              <Paragraph
                children="Marketplace de petshops com split de pagamentos do pagar.me, 
                acesso aos petshops através do mapa, 
                carrinho de compras, cadastro de cartão de crédito e de usuário."/>
            </div>
          </Card>

          <Card href="https://github.com/Lincoln-Modesto/S2-Engenharia"
            target="_blank"
            rel="noreferrer">
            <img src={saoquadrado} alt="petfood" loading="lazy" className="imgCard"/>
            <div className="content">
              <TitleDescription children="SÃO QUADRADO ENGENHARIA" />
              <div className="container-badges">
                <Badge>
                  <BadgeTitle children="HTML 5" />
                </Badge>
                <Badge>
                  <BadgeTitle children="CSS 3" />
                </Badge>
                <Badge>
                  <BadgeTitle children="JAVASCRIPT" />
                </Badge>
                <Badge>
                  <BadgeTitle children="JQUERY" />
                </Badge>
              </div>
              <Paragraph
                children="Site institucional da empresa São Quadrado Engenharia, desenvolvido utilizando as premissas básicas do desenvolvimento web, sem o uso de frameworks.
                "/>
            </div>
          </Card>
        </div>

        {visibilityProjects === "VER MENOS" &&
          <div className="projetosContainer">
            <Card href="https://github.com/Lincoln-Modesto/Seecon-Engenharia"
              target="_blank"
              rel="noreferrer">
              <img src={seecon} alt="seecon" loading="lazy" className="imgCard"/>
              <div className="content">
                <TitleDescription children="SEECON ENGENHARIA" />
                <div className="container-badges">
                  <Badge>
                    <BadgeTitle children="HTML 5" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="CSS 3" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="JAVASCRIPT" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="JQUERY" />
                  </Badge>
                </div>
                <Paragraph
                  children="Site institucional da empresa Seecon Engenharia, desenvolvido utilizando as premissas básicas do desenvolvimento web, sem o uso de frameworks.
                "/>
              </div>
            </Card>

            <Card href="https://github.com/Lincoln-Modesto/NLW-Together---gameplay"
              target="_blank"
              rel="noreferrer">
              <img src={gameplay} alt="gameplay" loading="lazy" className="imgCard"/>
              <div className="content">
                <br />
                <TitleDescription children="GAMEPLAY" />
                <div className="container-badges">
                  <Badge>
                    <BadgeTitle children="REACT-NATIVE" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="EXPO" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="TYPESCRIPT" />
                  </Badge>
                </div>
                <Paragraph
                  children="Projeto de aplicativo móvel em react-native, feito em expo e utilizando sistema de login do Discord. Aplicação para agendamento de partidas de jogos online
                "/>
              </div>
            </Card>
          </div>}

        {visibilityProjects === "VER MENOS" &&
          <div className="projetosContainer">
            <Card href="https://github.com/Lincoln-Modesto/NLW5---PlantManager"
              target="_blank"
              rel="noreferrer">
              <img src={plant} alt="plant" loading="lazy" className="imgCard"/>
              <div className="content">
                <br />
                <TitleDescription children="PLANT MANAGER" />
                <div className="container-badges">
                  <Badge>
                    <BadgeTitle children="REACT-NATIVE" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="EXPO" />
                  </Badge>
                  <Badge>
                    <BadgeTitle children="TYPESCRIPT" />
                  </Badge>
                </div>
                <Paragraph
                  children="Projeto de aplicativo móvel em react-native, feito em expo. Aplicação para gerenciamento da rega de plantas, utilizando notificações em push.
                "/>
              </div>
            </Card>
          </div>}

        <div className="ux-button">
          <Button children={visibilityProjects} onClick={handleVisibilityProjects} />
        </div>
      </section>

      <section className="container">
        <Title children="Principais habilidades" />
        <div className="container-items">
          <Item img={js} subtitle="JAVASCRIPT" />
          <Item img={ts} subtitle="TYPESCRIPT" />
          <Item img={react} subtitle="REACT JS" />
          <Item img={native} subtitle="REACT NATIVE" />
          <Item img={redux} subtitle="REDUX" />
          <Item img={styled} subtitle="STYLED COMPONENTS" />
          <Item img={figma} subtitle="FIGMA" />
          <Item img={git} subtitle="GIT" />
        </div>

        <div className="container-contact">
          <ItemContact img={github} subtitle="GITHUB" contact="https://github.com/Lincoln-Modesto" />
          <ItemContact img={linkedin} subtitle="LINKEDIN" contact="https://www.linkedin.com/in/lincoln-modesto" />
        </div>
        <SubtitleItem children="@COPYRIGHT 2021 - LINCOLN MODESTO" />
      </section>

    </main>
  )
}


