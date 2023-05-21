import React from 'react'
import "./style.css"
// import contactimg from '../images/contact.png'

function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div className='col-6 col-sm-4 d-flex justify-content-center ' width={200}>

      <div className='text-bg-primary mb-3 card' id="my_card" style={{ height: '20vh', width: '50vh' }}>
        <div className="card-header className='d-flex justify-content-end'"><span >
          <img
            src='profile.png' alt='profile' height={30} width={30} />
        </span>&nbsp;&nbsp;
          <span>{name}</span>
          <span className='d-flex justify-content-end'><svg ca xmlns="http://www.w3.org/2000/svg"
            style={{ textAlign: "right" }}
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
            onClick={() => { props.onDelete(id) }}

          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">{email}</p>
        </div>
      </div>




      {/* <div className='badge text-bg-primary'> */}
      {/* <img src="contact.png" alt="user" /> */}
      {/* &nbsp; */}
      {/* <span>{name}</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {email}
        <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
          onClick={() => { props.onDelete(id) }}
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </div> */}


    </div >

  );
}
export default ContactCard;
