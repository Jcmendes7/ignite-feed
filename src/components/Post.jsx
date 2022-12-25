import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, publishAt, content }) {
  const [ comment,setComments ] = useState(
    [
      'Seu Post ficou top!!!'
    ]
  )
  const formattedPublicationDate = format(publishAt, "d,LLLL, HH:mm", {
    locale: ptBR,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const  [newCommentText, setNewCommentText]  = useState('')

  function createNewComment() {
    event.preventDefault()
    setComments([...comment, newCommentText])
    setNewCommentText('')
    
  }
  function newCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
    
  }

  function newCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function onDeleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comment.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0;
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={formattedPublicationDate}
          dateTime={publishAt.toISOString()}
        >
          {publisheDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((list) => {
          if (list.type === "paragraph") {
            return <p key={list.content} >{list.content}</p>;
          } else if (list.type === "link") {
            return (
              <p  key={list.content}><a href="#">{list.content}</a></p>
            );
          }
        })}
      </div>
      <form onSubmit={createNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea 
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={newCommentChange}
          onInvalid={newCommentInvalid}
          required
         />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comment.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={onDeleteComment} 
            />
          )
        })}
      </div>
    </article>
  );
}
