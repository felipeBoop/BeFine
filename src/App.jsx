import { Header } from './components/Header'
import { CreateBeFine } from './components/CreateBeFine'
import { BeFine } from './components/BeFine'

import './global.css'
import styles from './app.module.css'

const posts = [
    {
      id: 1,
      content: [
        {type: "paragraph", content: "Clique aqui para adicionar um Be-Fine ヾ(•ω•`)o "}
      ]
    },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <main>
          {posts.map(post => {
            return (
              <CreateBeFine
                key={post.id}
                author={post.author}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
