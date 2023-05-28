import './management.scss';
import '../../App.scss'

import member1 from '../../assets/MemberPhotos/1.jpg';
import member2 from '../../assets/MemberPhotos/2.jpg';
import member3 from '../../assets/MemberPhotos/3.jpg';
import member4 from '../../assets/MemberPhotos/4.jpg';
import member5 from '../../assets/MemberPhotos/5.jpg';
import member6 from '../../assets/MemberPhotos/6.jpg';
import listImg from '../../assets/list.png';
import CardComponent from '../../components/card/card.component';

function Management() {
  return (
    <>
      <h1 className="page-header">
        Management
        <span className="short_br"></span>
      </h1>

      <p className="paragraph-style">
        The Governing Body of the Institutions shall be the Managing Committee. The administration
        and management of the institution shall vest with the Managing committee consisting of 15
        elected members, six co-opted members and 15 ex-officio members.
      </p>
      <p className="paragraph-style">
        The elected members shall choose, from among themselves,the following office bearers:
      </p>
      <ul className="member-list">
        <li className="list-style">
          <img src={listImg} alt="list" className="h-3 mt-2.5 mr-1" /> President - 1
        </li>
        <li className="list-style">
          <img src={listImg} alt="list" className="h-3 mt-2.5 mr-1" />
          Vice-President - 2
        </li>
        <li className="list-style">
          <img src={listImg} alt="list" className="h-3 mt-2.5 mr-1" />
          Secretary - 1
        </li>
        <li className="list-style">
          <img src={listImg} alt="list" className="h-3 mt-2.5 mr-1" />
          Joint Secretary - 1
        </li>
        <li className="list-style">
          <img src={listImg} alt="list" className="h-3 mt-2.5 mr-1" />
          Treasurer - 1
        </li>
      </ul>
      <p className="paragraph-style">
        The Managing Committee in its first meeting shall co-opt four members for a three year term
        and two members from two different Regional Chapters (one from each chapter),either the
        President of the chapter or his nominee,who in its opinion will be useful to the Managing
        Committee in the dischargeof its functions, on a rotation for one year term.
      </p>
      <div className="managingComittee">
        <h4> Managing Committee 2022 - 2025 </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
