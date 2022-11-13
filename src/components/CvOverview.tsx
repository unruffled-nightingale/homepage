import React from "react";
import styled from "styled-components";


const Intro = styled.p`
    margin-bottom: 36px;
`

const Skills = styled.div`
`

const SkillBlock = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 30%;
`

const SkillTitle = styled.h2`
  margin-bottom: 12px;
  margin-top: 36px;
`

const SkillSubTitle = styled.h3`
`

const SkillItem = styled.p`
    margin-top: 4px;
    margin-bottom: 4px;
`


export const CvOverview = () => {
    return (
        <>
            <Intro>
                A senior full-stack software engineer believing clean architecture and
                simple design build the most powerful and extensible platforms.
                <br/>
                Test driven development, continuous integration, daily deployments and monitoring are the steps to an easier life.
            </Intro>
            <Skills>
                <SkillTitle>Languages (and frameworks)</SkillTitle>
                <SkillBlock>
                    <SkillSubTitle>Python</SkillSubTitle>
                    <SkillItem>FastAPI</SkillItem>
                    <SkillItem>Flask</SkillItem>
                    <SkillItem>Django Rest Framework</SkillItem>
                    <SkillItem>Faust.io</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>Java</SkillSubTitle>
                    <SkillItem>Spring</SkillItem>
                    <SkillItem>Kafka Streams</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>Typescript</SkillSubTitle>
                    <SkillItem>React</SkillItem>
                </SkillBlock>
                <SkillTitle>Tooling</SkillTitle>
                <SkillBlock>
                    <SkillSubTitle>Deployment</SkillSubTitle>
                    <SkillItem>Kubernetes</SkillItem>
                    <SkillItem>Docker</SkillItem>
                    <SkillItem>AWS</SkillItem>
                    <SkillItem>Digital Ocean</SkillItem>
                </SkillBlock>
                <SkillBlock>
                    <SkillSubTitle>Datastores</SkillSubTitle>
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