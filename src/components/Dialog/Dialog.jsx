import styles from "./styles.module.css";

const Dialog = () => {
  return (
    <form>
      <fieldset className={styles.fieldset}>
        <legend>select an category</legend>
        <div>
          <label for="category">Please choose an category</label>
          <br />
          <select name="category" id="category">
            <option value=""></option>
            <option value="administration">Administration</option>
            <option value="cyber">Cyber defense</option>
            <option value="network">Network administration</option>
          </select>
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>ask a question</legend>
        <div>
          <label for="question">Please ask a question</label>
          <br />
          <textarea name="question" id="question"></textarea>
        </div>
      </fieldset>
    </form>
  );
};

export default Dialog;
