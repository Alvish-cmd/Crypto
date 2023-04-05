interface userRows {
  market: string,
  change_24_hour: number,
  low: number,
  high: number,
  last_price: number,
  volume: number,
  bid: number,
  ask: number,
  timestamp: number,
}



export const userColumns = [
  { field: 'baseAsset', headerName: 'Name', width: 180 },
  {
      field: 'openPrice',
      headerName: 'Open Price',
      type: 'number',
      width: 140,
  },

//   https://api.wazirx.com/sapi/v1/tickers/24hr
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
  
  ];



    
