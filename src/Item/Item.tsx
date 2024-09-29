import  Button  from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

function Item(props: Props) {
    return (
      <Wrapper>
        <img src={props.item.image} alt={props.item.title} />
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
            <h3>${props.item.price}</h3>
        </div>
        <Button onClick={() => props.handleAddToCart(props.item)}>Add to cart</Button>
      </Wrapper>
    );
  }

export default Item;



//   const Item: React.FC<Props> = ({item, handleAddToCart}) => (
//     <Wrapper>
//       {/* ... */}
//     </Wrapper>
//   );