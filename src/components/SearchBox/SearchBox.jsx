import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.filter);
  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={handleChangeFilter}
      />
    </div>
  );
}
