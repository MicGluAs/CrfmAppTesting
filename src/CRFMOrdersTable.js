import React from 'react';

function CRFMOrdersTable({ orders }) {
  const ordersArray = JSON.parse(orders);

  if (!ordersArray) {
    return <div>Loading...</div>;
  }

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Creation Date</th>
          <th>Order ID</th>
          <th>Order Type</th>
          <th>Reference Name</th>
          <th>Skip Queue</th>
        </tr>
      </thead>
      <tbody>
        {ordersArray.map(order => (
          <tr key={order.Id}>
            <td>{order.Id}</td>
            <td>{order.CreationDate}</td>
            <td>{order.OrderId}</td>
            <td>{order.OrderType}</td>
            <td>{order.ReferenceName}</td>
            <td>{order.SkipQueue ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CRFMOrdersTable;
