import { Title } from "@/atoms/Title/Title";
import styles from "./Guides.module.css";
import { Card } from "@/atoms/Card/Card";

export function Guides() {
  const options = [
    { title: "All" },
    { title: "Partner Enablement" },
    { title: "Guides" },
    { title: "Reports" },
    { title: "Videos" },
  ];

  return (
    <section className={styles.container}>
      <menu>
        {options.map((option) => (
          <Title category={option.title} />
        ))}
      </menu>
      <div className={styles.list}>
        {Array(10)
          .fill(1)
          .map(() => (
            <Card
              headerPhoto="https://picsum.photos/200/200?random"
              title="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
              content="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
            />
          ))}
      </div>
    </section>
  );
}
