import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimaryButton, SecondaryButton } from './my_util/Button'
import { Number } from './my_util/Number'
import { Card, Header, Image, Content, Skill } from './my_util/Card'
import baznas from './assets/baznas.jpg'

function App() {
  return (
    <div className='w-full bg-red-50'>
      <PrimaryButton>my resume</PrimaryButton>
      <Number>1</Number>
      <Number>2</Number>
      <SecondaryButton size={'sm'} className="mt-10">contact</SecondaryButton>
      <div className='mt-10 hover:tracking-wide'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio ut nisi hic perspiciatis sunt optio fugiat laborum voluptatem temporibus, vel nihil quae aperiam minima quisquam in velit rerum! Quo.
      </div>
      <Card>
        <Image src={baznas} />
        <Header>Education</Header>
        <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, dolor! Culpa earum eligendi et cupiditate quae, ipsa temporibus sunt velit, maxime possimus adipisci voluptatum accusamus quod praesentium? Magnam, incidunt a.</Content>
        <Skill>
          mencintaimu
        </Skill>
      </Card>

    </div>
  )
}

export default App
