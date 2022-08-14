import React from 'react';
import styles from './Feedback.module.css';

function Feedback() {
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <img
            src='https://avatars.mds.yandex.net/i?id=2a0000017a09477ae9967a067cb4932ef375-4825378-images-thumbs&n=13'
            alt='User avatar'
          />
        </div>

        <div className={styles.userInfo}>
          <p className={styles.userName}>Иван Иванов</p>
          <p className={styles.userText}>Sneakerhead</p>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolorem iusto minus.
        Ad fugiat nam nisi provident quae. Incidunt.
      </div>
    </div>
  );
}

export default Feedback;
