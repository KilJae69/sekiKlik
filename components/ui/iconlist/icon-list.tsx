import styles from './icon-list.module.scss';

interface Item {
  title: string;
  text: string;
}

interface IconListProps {
  items: Item[];
}

const IconList: React.FC<IconListProps> = ({ items }) => {
  return (
    <ul className={styles.iconList}>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.title}</span>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default IconList;
