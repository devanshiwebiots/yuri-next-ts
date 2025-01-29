import { AddProduct } from "@/Constants";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/Hooks";
import { setFilterToggle } from "@/ReduxToolkit/Reducers/ProductSlice";
import { useRouter } from "next/navigation";
import { Filter } from "react-feather";
import { Button } from "reactstrap";

export const ProductListFilterHeader = () => {
  
  const { filterToggle } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div>
      <div className="light-box" onClick={() => dispatch(setFilterToggle())}>
        <a>
          <Filter className={`filter-icon ${filterToggle ? "hide" : "show"}`} />
          <i className={`icon-close filter-close ${filterToggle ? "show" : "hide"}`} />
        </a>
      </div>
      <Button color="primary" onClick={() => router.push(`/ecommerce/add_product`)}>
        <i className="fa fa-plus" />
        {AddProduct}
      </Button>
    </div>
  );
};
