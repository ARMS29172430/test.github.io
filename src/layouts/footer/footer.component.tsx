/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <footer>
      <div className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">HOME LINKS</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Management</a>
          <a className="link link-hover">Contact us</a>
        </div>
        <div>
          <span className="footer-title">Videos</span>
        </div>
        <div>
          <span className="footer-title">Contact us</span>
          <a className="link link-hover">
            <span className="material-icons-round mr-2 relative top-1.5">place</span>
            Institution of Agricultural Technologists No. 15, Queen’s Road, Bangalore-560 052
          </a>
          <a className="link link-hover">
            <span className="material-icons-round mr-2 relative top-1.5">phone</span>
            Ph No : 80 22384175
          </a>
          <a className="link link-hover" href="mailto:iatbangalore@gmail.com">
            <span className="material-icons-round mr-2 relative top-1.5">mail</span>
            iatbangalore@gmail.com
          </a>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2019. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
