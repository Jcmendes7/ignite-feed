import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/Jcmendes7.png",
      name: "Jose Carlos",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jose.design/doctorcare" },
    ],
    publishAt: new Date("2022-12-22 15:23:40"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/Jcmendes7.png",
      name: "Jose Carlos",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jose.design/doctorcare" },
    ],
    publishAt: new Date("2022-12-22 15:23:40"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "http://github.com/Jcmendes7.png",
      name: "Jose Carlos",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jose.design/doctorcare" },
    ],
    publishAt: new Date("2022-12-22 15:23:40"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
