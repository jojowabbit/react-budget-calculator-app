import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            name="charge"
            id="charge"
            placeholder="example"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
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
