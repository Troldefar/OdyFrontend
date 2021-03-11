import { useState } from 'react';

import Modal from '../../el/Modal';

export default function LoggedInMenu(props: any): JSX.Element {
  const [modalOpen, setOpenModal] = useState(false);
  const bellMenu = document.querySelector<HTMLElement>('.bell-modal');
  const openModal = (e: any): void => {
    if(bellMenu !== null) {
      if(!modalOpen) {
        bellMenu.style.display = "block";
        setOpenModal(true);
      } else {
        bellMenu.style.display = "none";
        setOpenModal(false);
      }
    }
  }
  const date = new Date().toString().substr(3, 22);
  return (
    <div className="dashboard-right-upper">
      <h3>
        Dashboard
      </h3>
      <h3>
        { date }
      </h3>
      <div className="icons">
        <span className="mdi mdi-shield-search mr-2"></span>
        <span onClick={openModal} className="mdi mdi-bell-ring-outline mr-2">
          <Modal customClassName="bell-modal" data={123} />
        </span>
        <span className="mdi mdi-cog-outline mr-2"></span>
      </div>
    </div>
  )
}
