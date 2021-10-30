import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hook/UseAuth";
import "./Manageorder.css";

const Manageorder = () => {
  const [data, setdata] = useState([]);
  const { user } = useAuth();
  const [condition, setcondition] = useState(true);

  useEffect(() => {
    const status = "pending";
    axios
      .get(`http://localhost:7000/getadmindata?status=${status}`)
      .then((res) => setdata(res.data));
  }, [user, condition]);

  console.log(condition);
  const handelapprov = (id) => {
    const statusdata = "Approve";
    axios
      .post(`http://localhost:7000/statusupdate/${id}`, { statusdata })
      .then((res) => {
        setcondition(!condition);
        if (res.data.modifiedCount > 0) {
          toast.success("Order Approve !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <div className="every-orderparent ">
      <ToastContainer />
      <div className="">
        <h3 className="admin-header">ADMIN DAILY DASHBOARD</h3>
        {data.map((DATA) => (
          <div key={DATA.name} className="every-order">
            <div className="text-aria">
              <h5 className="name">{DATA.name}</h5>

              <h5 className="price">{DATA.price}</h5>
              <h5 className="status">{DATA.status}</h5>
            </div>

            <div className="button-aria">
              <button
                onClick={() => handelapprov(DATA._id)}
                className="approve-button"
              >
                approve
              </button>
              <button className="mana-cancele-button">cancele</button>
              <button className="mana-delete-button">delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manageorder;
