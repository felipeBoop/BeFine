import styles from './CreateBeFine.module.css'
import IconButton from '@mui/material/IconButton';
import { Add } from '@mui/icons-material';
import { BeFine } from './BeFine'
import { useState } from 'react';

var beFines = [
    {
      id: 1,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Essa é a única vez que você vai viver dentro desse corpo, ele só merece o seu amor ♡'}
      ]
    },
    {
      id: 2,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Você é um chuchuzinho!'}
      ]
    },
    {
      id: 3,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'É só um dia ruim, vai passar!'}
      ]
    },
    {
      id: 4,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Nada é permanente.'}
      ]
    },
    {
      id: 5,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Se olhe e se cuide com o mesmo amor que trata os outros.'}
      ]
    },
    {
      id: 6,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Lembre-se de que os momentos difíceis também passam. A tempestade sempre acaba.'}
      ]
    },
    {
      id: 7,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Respire fundo, dê um passo de cada vez e siga em frente.'}
      ]
    },
    {
      id: 8,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: '😳'}
      ]
    },
    {
      id: 9,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Você já superou desafios antes, e este não será diferente. Confie na sua capacidade de enfrentar isso! <3'}
      ]
    },
    {
      id: 10,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'É normal se sentir um pouco perdido às vezes, não se cobre tanto e tenha paciência!'}
      ]
    },
    {
      id: 11,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Seja gentil consigo mesmo. Não estamos em uma corrida, aproveite os momentos que a vida lhe dá :).'}
      ]
    },
    {
      id: 12,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Você é a autora da sua história.'}
      ]
    },
    {
      id: 13,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'A gente sempre pode recomeçar!'}
      ]
    },
    {
      id: 14,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Aproveite os pequenos momentos da vida, eles costumam ser os melhores <3'}
      ]
    },
    {
      id: 15,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Se você estiver sozinhe tente sair um pouco, pode parecer difícil, mas sempre vale a pena!'}
      ]
    },
    {
      id: 16,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Ei se ame ❤️🧡💛💙💜🤎🖤🤍'}
      ]
    },
]

var itemCount = beFines.length;

export function CreateBeFine({content}){

  const [beFinesList, setBeFinesList] = useState([
    {
      id: 99999999,
      author: {
        name: "Anônimo muito legal mesmo ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Tente criar um Be-Fine acima ^(°u°)^'}
      ]
    },
  ]);

  function handleCreateNewBeFine(){
    setBeFinesList([handleGetRandomBefine(), ...beFinesList])
  }

  function handleGenerateBeFine(){
    let randomNumber = handleGetRandomNumber();
    
    while(randomNumber === undefined){
      randomNumber = handleGetRandomNumber();
    }

    return beFines.find(({id}) => id === randomNumber);
  }

  //obtem um befine de maneira random
  function handleGetRandomBefine(){
    let count = 0;
    let befine = handleGenerateBeFine();

    if(befine === undefined){
      if(beFines.length === 0){
        return handleEmptyBeFine();
      }

      while(befine === undefined){
        befine = handleGenerateBeFine();
        count++;
        if(count > 1000){
          return handleEmptyBeFine();
        }
      }
    }

    if(befine.id > 0) {
      beFines.splice(beFines.findIndex(bf => bf.id == befine.id), 1);
    }

    return befine;
  }

  function handleEmptyBeFine(){
    return {
      id: Math.floor(Math.random() * itemCount) + Math.floor(Math.random() * 1273127),
      author: {
        name: "Carinha programador ☆*: .｡. o(≧▽≦)o .｡.:*☆",
      },
      content: [
        {type: "paragraph", content: 'Desculpa acabaram os Be-Fine (っ °Д °;)っ'},
        {type: "paragraph", content: 'Você pode enviar os Be-Fines para este e-mail aqui ó: '},
        {type:"email", content: "contact-befine@befine.live"},
        {type: "paragraph", content: 'relaxa, é tudo anônimo (￣y▽,￣)╭  hohohoho'}
      ]
    }
  }

  //obtem um numero de acordo com a quantidade de caracteres
  function handleGetRandomNumber (){
    return Math.floor(Math.random() * itemCount) + 1;
  }

  return (
    <>
      
      <article className={styles.post} onClick={handleCreateNewBeFine}>
          <div className={styles.content}>
              <IconButton aria-label="Add"
                type='submit'
                disabled={true}
              >
                <Add />
              </IconButton>
              {content.map(line => {
                  return <p className={styles.authorInfo} key={line.content}><strong>{line.content}</strong></p>;
              })}
          </div>
      </article>
      
      <article className={styles.beFines}>
        {beFinesList.map(beFine => {
          return (
            <BeFine
              key={beFine.id}
              author={beFine.author}
              content={beFine.content}
            />
          )
        })}
      </article>
    </>
  );
}