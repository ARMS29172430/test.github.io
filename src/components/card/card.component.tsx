import { CardObject } from './card.type';
import './card.scss';

function CardComponent(cardInputs: CardObject) {
  return (
    <>
      <div className="card w-full bg-base-100 card-container">
        <figure>
          <img src={cardInputs.memberPhoto} alt={cardInputs.memberName} className="rounded-xl" />
        </figure>
        <span className="card-body items-center text-center">
          <h2 className="card-member-name">{cardInputs.memberName}</h2>
          <p className="card-member-post">{cardInputs.memberPost}</p>
        </span>
      </div>
    </>
  );
}

export default CardComponent;
