import React, { useState, useEffect } from 'react';
import { getAccessToken } from './Auth';
import CRFMOrdersTable from './CRFMOrdersTable';

function CRFMOrdersList() {
  const [accessToken, setAccessToken] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchOrders(accessToken);
    }
  }, [accessToken]);

  async function fetchOrders(accessToken) {
    const echoPostRequest = {
      url: 'http://10.10.115.153/sit-svc/Application/AppU4DM/odata/AppU4DMExt_CallDBProcedure',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ command: { ProcedureName: "dbo.JIS_GetCRFMOrdersToStart", ResultTable: true, JSONParameterDict: "{}" } })
    };

    try {
      const response = await fetch(echoPostRequest.url, {
        method: echoPostRequest.method,
        headers: echoPostRequest.headers,
        body: echoPostRequest.body
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      
      console.log(data);
      setJsonData(data.ResultTable);
      
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* <p>Aktywne zlecenia:</p> */}
      {/* <CRFMOrdersTable orders={jsonData} /> */}
      {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
      <p>Aktywne zlecenia:</p>
      {jsonData && <CRFMOrdersTable orders={jsonData} />}
    </div>
  );
}

export default CRFMOrdersList;