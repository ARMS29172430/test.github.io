import '../../App.scss';
import './about-us.scss';
import aboutUs from '../../assets/about_us.jpg';
import listImg from '../../assets/list.png';

function AboutUs() {
  return (
    <>
      <h1 className="page-header">
        About Us
        <span className="short_br"></span>
      </h1>
      <div className="img-para-container">
        <img src={aboutUs} alt="IAT" />
        <p className="iat-container paragraph-style">
          The IAT, a non- profit voluntary association of agricultural technologists was established
          1968. The Institution that started as a forum for discussing ideas on agricultural
          development in a small way has grown in magnitude attracting the professionals from with
          the State, Country and Abroad. The idea of formation of IAT was conceived by the
          distinguished late Dr. H.R. Arakeri and nurtured to grow as an organization with the
          dedicated efforts of senior technologists.
          <div>
            IAT provides a platform to advance the professional interests of its members and promote
            growth and development of agriculture in general.
          </div>
        </p>
      </div>
      <h4>
        <strong>History </strong>
      </h4>
      <p className="paragraph-style">
        Tradition or History can be an anchor of stability and a shield to guide in the direction
        that was intended.{' '}
      </p>
      <p className="paragraph-style">
        {' '}
        When we consider History – Two aspects are identified : (a) The Physical and (b) The object{' '}
      </p>
      <ul>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            IAT was incorporated in 1968 – Dr.H.R.Arakeri – the founder president – object was to
            hold fortnightly lectures at the Department of Agriculture. I understand there were 25
            founder members.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Dr.Dwarakinath as President, defined the purpose and provided a direction in which the
            Institution should move. This was in 1972-73. Sri.B.J.Nanjundappa joined me with
            enthusiasm in our quest for physical assets.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Sri.N.Chikkegowda the then minister for Animal Husbandry and Agriculture got this site
            (17,000 Sq.ft) on a 99 year leas from the Government on a least of Rs.100/ per year.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            This was the time when Dr.H.R.Arakeri started the formation of IIAT. His object was to
            start an IAT in every state of the country. N.Chikkegowda sanctioned Rs.50,000/- towards
            the inaugural function.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            IAT, however, transferred this entire amount to the building fund.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            We started construction of the building (the first phase) in 1977. Sri.N.Chikkegowda
            sanctioned Rs.500,000/- for the building construction.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Completed construction of the building in 1982. Dr.Norman Borlag – the only Nobel
            laureate in Agriculture inaugurated the building.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Though building completed – we were short of funds and we needed finances to meet the
            contractor’s bills. Dr.T.V.Sampath and Sri.C.Lingaraj Urs came to our assistance by
            hiring the first floor for the seed corporation.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Now comes the Second Phase – IAT started construction of the front block in 1991 as a
            part of silver jubilee celebrations.
          </div>
          <div>
            1. IAT had over the past years accumulated of nearly Rs.10,00,000/- (Ten Lakhs). This
            was sufficient to construct the car park and part of I Floor.
          </div>
        </li>
        <li>
          <div>
            2. Sri.N.Chikkegowda who had assumed charge as Minister for Agriculture sanctioned
            Rs.10,00,000/- (Ten Lakhs). We were able to complete the I Floor and II Floor of the
            building.{' '}
          </div>
        </li>
        <li>
          <div>
            3. As we were completing construction of the II Floor M/s.Deneb a software IAT company
            made an agreement with IAT and leased both the floors.{' '}
          </div>
        </li>
        <li>
          <div>
            4. A 10 month lease deposit helped us construct the III Floor. We completed the entire
            construction in 1993.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Areas of building :<div> 1. a)B.J.Nanjundappa block ( old block) : 8000 Sq.ft. </div>
            <div>2. b)N.Chikkegowda block : 8000 Sq.ft.</div>
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Nomenclature : In view of magnanimous contributions made by Sri.N.Chikkegowda – Site –
            17,000 Sq.ft on 100 year lease.
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Financial Contribution – Rs.50,000 + Rs.500,000 + Rs.10,00,000 = Rs.15.5 lakhs
          </div>{' '}
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Hence, the new block is named after Chikkegowda.{' '}
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            Ground Floor Auditorium -Dr.H.R.Arakeri Auditorium{' '}
          </div>
        </li>
        <li>
          <div className="display-flex">
            <img src={listImg} alt="list" className="h-3 mt-1.5 mr-1" />
            First Floor Auditorium - B.J.Nanjundappa Hall
          </div>{' '}
        </li>
      </ul>
    </>
  );
}

export default AboutUs;
