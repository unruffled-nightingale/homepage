import styled from "styled-components";


const Intro = styled.p`
    margin-bottom: 36px;
    font-size: 0.8em;
`

const Skills = styled.div`
`

const SkillBlock = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 30%;
`

const SkillTitle = styled.h3`
  margin-bottom: 12px;
  margin-top: 36px;
  font-size: 1em;
  `

const SkillSubTitle = styled.h3`
font-size: 1em;
`

const SkillItem = styled.p`
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 0.8em;
`


export const Overview = () => {
    return (
        <>
            <Intro>
            <br/>
            <br/>
            <br/>
                A lead full-stack software engineer believing clean architecture and
                simple design build the most powerful and extensible platforms.
                <br/>
                <br/>
                Strong believer that test driven development, continuous integration, daily deployments 
                and good quality observability are the steps to an easier life.
            </Intro>
            <Skills>
                <SkillTitle>LANGUAGES</SkillTitle>
                <SkillBlock>
                    <SkillSubTitle>PYTHON</SkillSubTitle>
                    <SkillItem>FastAPI</SkillItem>
                    <SkillItem>Flask</SkillItem>
                    <SkillItem>Django Rest Framework</SkillItem>
                    <SkillItem>Faust.io</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>JAVA</SkillSubTitle>
                    <SkillItem>Spring</SkillItem>
                    <SkillItem>Kafka Streams</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>TYPESCRIPT</SkillSubTitle>
                    <SkillItem>React</SkillItem>
                </SkillBlock>
                <SkillTitle>TOOLING</SkillTitle>
                <SkillBlock>
                    <SkillSubTitle>DEPLOYMENT</SkillSubTitle>
                    <SkillItem>Kubernetes</SkillItem>
                    <SkillItem>Docker</SkillItem>
                    <SkillItem>AWS</SkillItem>
                    <SkillItem>Digital Ocean</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>DATASTORES</SkillSubTitle>
                    <SkillItem>Kafka</SkillItem>
                    <SkillItem>OpenSearch</SkillItem>
                    <SkillItem>Postgres</SkillItem>
                    <SkillItem>OracleDB</SkillItem>
                    <SkillItem>Redis</SkillItem>
                    <SkillItem>S3</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>CI-CD</SkillSubTitle>
                    <SkillItem>CircleCI</SkillItem>
                    <SkillItem>Azure</SkillItem>
                    <SkillItem>Github Actions</SkillItem>
                </SkillBlock>
            </Skills>
        </>
    )
}
