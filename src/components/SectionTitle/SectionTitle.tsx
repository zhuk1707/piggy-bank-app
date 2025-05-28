import style from "./SectionTitle.module.css";

export default function SectionTitle({ children }: {children: string}) {
  return (
      <h1 className={style.sectionTitle}>{children}</h1>
  );
}
