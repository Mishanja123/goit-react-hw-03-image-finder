import PropTypes from "prop-types";


export const Searchbar = ({onSubmit}) => {
    return(
        <header className={searchbar}>
            <form className={form}>
                 <button type="submit" className={button}>
                    <span className={buttonLabel}>Search</span>
                </button>

                <input
                    className={input}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
             </form>
        </header>
    )
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}