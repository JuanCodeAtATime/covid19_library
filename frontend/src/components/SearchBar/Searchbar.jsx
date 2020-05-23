import React from "react";
import styles from './Searchbar.module.css';
import cx from 'classnames';


function Searchbar({ q, handleInputChange, handleFormSubmit }) {
    return (
        <div className={styles.formWrapper}>
            <form className="form-inline">
                <div className="form-group">
                    <input
                        className={styles.input}
                        id="Title"
                        type="text"
                        value={q}
                        placeholder="Search resources"
                        name="q"
                        onChange={handleInputChange}
                        size="55"
                        required
                    />
                </div>
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className={cx(styles.button, `btn`)}
                >
                    Search
      </button>
            </form>
        </div>
    );
}

export default Searchbar;