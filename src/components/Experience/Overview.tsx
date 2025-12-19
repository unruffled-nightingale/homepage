import styled from "styled-components";


const Intro = styled.p`
    margin-top: 0px;
    font-size: 0.8em;
    font-family: 'STIX Two Text', monospace;
`

const Skills = styled.div`
`

const SkillBlock = styled.div`
  vertical-align: top;
  display: block;
  width: 100%;
`

const SkillTitle = styled.h3`
  font-size: 0.8em;
  font-family: 'Noto Sans Mono', monospace;
  letter-spacing: 0.7em;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
`

const SkillSubTitle = styled.h3`
 font-size: 0.8em;
 display: inline-block;
  font-family: 'Noto Sans Mono', monospace;
  letter-spacing: 0.7em;
  font-weight: normal;
  margin: 0;
  width: 40%
`

const SkillItem = styled.p`
    margin-top: 4px;
    font-size: 0.8em;
    font-family: 'STIX Two Text', monospace;
    display: inline-block;


`


export const Overview = () => {
    return (
        <>
            <Intro>
                A lead full-stack software engineer believing clean architecture and
                simple design build the most powerful and extensible platforms.
            </Intro>
            <Skills>
                <SkillTitle>LANGUAGES</SkillTitle>
                <SkillBlock>
                    <SkillSubTitle>PYTHON</SkillSubTitle>
                    <SkillItem>FastAPI, Flask, Langraph, Django Rest Framework, Faust.io</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>JAVA</SkillSubTitle>
                    <SkillItem>Spring, Kafka Streams</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>TYPESCRIPT</SkillSubTitle>
                    <SkillItem>React</SkillItem>
                </SkillBlock>
                <SkillTitle>TOOLING</SkillTitle>
                <SkillBlock>
                    <SkillSubTitle>CLOUD</SkillSubTitle>
                    <SkillItem>AWS, GCP, Digital Ocean, Kubernetes, Docker</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>DATASTORES</SkillSubTitle>
                    <SkillItem>Kafka, Redshift, BigQuery, Postgres</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>CI-CD</SkillSubTitle>
                    <SkillItem>CircleCI, Azure, Github Actions</SkillItem>
                </SkillBlock>
            </Skills>
        </>
    )
}
