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
    axios.get("http://localhost:7000/getadmindata").then((res) => {
      setdata(res.data);
    });
  }, [condition]);

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

  const handeldelete = (id) => {
    const procid = window.confirm("Are You Sure");
    if (procid) {
      axios
        .delete(`http://localhost:7000/deleteaddmindata/${id}`)
        .then((res) => {
          if (res.data.acknowledged) {
            setcondition(!condition);
          }
        });
    }
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

              <button
                onClick={() => handeldelete(DATA._id)}
                className="mana-delete-button"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manageorder;
