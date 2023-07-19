import React from "react";
import "./Table.css";
import useFetch from "../../../hooks/usefetch";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


const Table = ({data1,columns,hover,striped}) => {
  const navigate = useNavigate();

  const { user,dispatch } = useContext(AuthContext);
  
  const {data, loading,error,refetchData} = useFetch(`http://54.234.178.57:8800/api/booking/user/${user.id}`);
  
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  useFetch(()=>{
    refetchData();
  })

  const DetailedBooking = (id) => {
    navigate(`/userDashboard/booking/${id}`)
  }

  
  return (
    <div >
  <h1 className="Section-Heading">Recent Bookings</h1>
  <p className="Section-paragraph">Click to view booking details</p>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr onClick={()=>DetailedBooking(row.id)} className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) => (
                  <td>{row[col.field]}</td>
                ))}
              </tr>
            ))}

        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Table;
