import "./datatable.css";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
interface dataObj {
  market: string;
  change_24_hour: number;
  low: number;
  high: number;
  last_price: number;
  volume: number;
  bid: number;
  ask: number;
  timestamp: number;
  }
  
  
  
  const columns = [
      { field: 'baseAsset', headerName: 'Name', width: 180 },
      {
          field: 'openPrice',
          headerName: 'Open Price',
          type: 'number',
          width: 140,
      },
    {
        field: 'lowPrice',
        headerName: 'Low Price ',
        width: 180,
        type: 'number',
      },
      {
          field: 'highPrice',
          headerName: 'High Price',
          width: 180,
          type: 'number',
        },
        {
          field: 'volume',
          headerName: 'Volume',
          width: 180,
          type: 'number',
        },
        {
          field: 'bidPrice',
          headerName: 'Bid Price',
          width: 180,
          type: 'number',
        },
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/chart" style={{ textDecoration: "none" }}>
                  <div className="buyButton">Buy</div>
                </Link>
                <Link to="/chart" style={{ textDecoration: "none" }}>
                <div
                  className="sellButton"
                >
                  Sell
                </div>
                </Link>
                <Link to="/Marketchart" style={{ textDecoration: "none" }}>
                <div
                  className="chartButton"
                >
                  Chart
                </div>
                </Link>
              </div>
            );
          },
        },
      
      ];
const Datatable = () => {
  
  const [cPrice , setCPrice] = useState<dataObj[]>([])
    const Price = async () => 
    {
        const response = await fetch(
        "https://api.wazirx.com/sapi/v1/tickers/24hr",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          
          },
        }
        );
        const data = await response.json();
        setCPrice(data);
    }; 
        useEffect(() => {
        let interval = setInterval(() => {
        Price();
        }, 13000);
        return () => {
        clearInterval(interval);
        };
        }, []); 

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Market
      </div>
      
      <DataGrid
        className="datagrid"
        rows={cPrice}
        getRowId={(row: any) =>  row.baseAsset + `${row.openPrice}$` + row.lowPrice + row.highPrice + row.volume + row.bidPrice}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}   
        loading = {!cPrice.length}
      />
    </div>
  );
};

export default Datatable;
