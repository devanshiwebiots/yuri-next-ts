import { AddCategory } from "@/Constants";
import { setFilterToggle } from "@/ReduxToolkit/Reducers/ProductSlice";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import Link from "next/link";
import { Filter } from "react-feather";

export const ProductListFilterHeader = () => {
  
  const { filterToggle } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="light-box" onClick={() => dispatch(setFilterToggle())}>
        <a>
          <Filter className={`filter-icon ${filterToggle ? "hide" : "show"}`} />
          <i className={`icon-close filter-close ${filterToggle ? "show" : "hide"}`} />
        </a>
      </div>
      <Link className="btn btn-primary" href={`/applications/ecommerce/add-products`}>
        <i className="fa fa-plus" />{AddCategory}</Link>
    </div>
  );
};
