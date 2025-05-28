import styles from "./Modal.module.css"
import {XIcon} from "lucide-react";
import Button from "../Button/Button.tsx";


export default function Modal({title, children, onClose}: {
  title: string,
  onClose: () => void,
  children: any
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.window}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <Button onClick={onClose} icon={<XIcon size={18}/>}/>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
