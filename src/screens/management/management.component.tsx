import CardComponent from '../../components/card/card.component';
import member1 from '../../assets/MemberPhotos/1.jpg';
import member2 from '../../assets/MemberPhotos/2.jpg';
import member3 from '../../assets/MemberPhotos/3.jpg';
import member4 from '../../assets/MemberPhotos/4.jpg';
import member5 from '../../assets/MemberPhotos/5.jpg';
import member6 from '../../assets/MemberPhotos/6.jpg';

function Management() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CardComponent
          memberPhoto={member1}
          memberName={'Smt. C. N. Nandini Kumari'}
          memberPost={'President'}
        />
        <CardComponent
          memberPhoto={member2}
          memberName={'Sri. M. Mahantheshappa'}
          memberPost={'Vice President'}
        />
        <CardComponent
          memberPhoto={member3}
          memberName={'Sri. Lachappa l. Roodagi'}
          memberPost={'Vice President'}
        />
        <CardComponent
          memberPhoto={member4}
          memberName={'Sri. Veeranna Kamatar'}
          memberPost={'Secretary'}
        />
        <CardComponent memberPhoto={member5} memberName={'Sri B. Umesh'} memberPost={'Treasurer'} />
        <CardComponent
          memberPhoto={member6}
          memberName={'Dr. B. Krishnamurthy'}
          memberPost={'Joint Secretary'}
        />
      </div>
    </>
  );
}

export default Management;
