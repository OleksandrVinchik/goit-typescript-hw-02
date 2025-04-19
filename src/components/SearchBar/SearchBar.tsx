import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface Props {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast.error("Введіть ключове слово!");
      return;
    }
    onSubmit(inputValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search images..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}
