import { CardObject } from "./card.type";

function CardComponent(cardInputs: CardObject) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={cardInputs.memberPhoto} alt={cardInputs.memberName} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardInputs.memberName}</h2>
          <p>{cardInputs.memberPost}</p>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
