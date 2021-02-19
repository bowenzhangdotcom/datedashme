import React from 'react'
import styles from "./Contact.module.css";

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.ContactRow}>
          <span className={styles.ContactHeader}>Contact</span>
        <div className={styles.Bowen}>
            <span>Developer: <a
              href="https://bowenzhang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >Bowen Zhang
            </a>
            </span>
        </div>
        <div className={styles.Jenny}>
            <span>Designer: <a
              href="https://www.jennyin.org/"
              target="_blank"
              rel="noopener noreferrer"
            >Jenny Yin
            </a>
            </span>
        </div>
      </div>
   )
  }
}

export default Contact