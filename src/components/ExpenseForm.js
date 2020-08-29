import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            name="charge"
            id="charge"
            value={charge}
            onChange={handleCharge}
            placeholder="example"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            placeholder="123"
            className="form-control"
          />
        </div>
      </div>

      <button type="submit" className="btn">
        submit <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
