
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar  src="http://github.com/Jcmendes7.png" />
        <strong>Jose Carlos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}
