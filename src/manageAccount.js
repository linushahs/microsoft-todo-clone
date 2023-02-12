import React from "react";

function ManageAccount({ hideManageAccount }) {
  return (
    <div className="ma-container">
      <div className="manage-account">
        <h4>Manage accounts</h4>
        <div className="account">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Logo"
            className="logo"
          />
          <div className="account-details">
            <h5>Sunil Shah</h5>
            <p>sunntraveler2004@outlook.com</p>
          </div>
          <button>Sign out</button>
        </div>
        <p className="add-account">
          <span>+</span> Add account
        </p>
        <p className="close-btn">
          <button onClick={() => hideManageAccount()}>Close</button>
        </p>
      </div>
    </div>
  );
}

export default ManageAccount;
