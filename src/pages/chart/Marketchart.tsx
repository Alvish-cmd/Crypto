/**
 * Sample for Stock Chart with Default
 */
import * as React from "react";
import { useState, useEffect } from "react";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from './indicator-data.js';
import './Marketchart.css'
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Mgo+DSMBaFt+QHFqVkFrWE5HdkBAXWFKblJ0T2ZbdVtwZCQ7a15RRnVfRl1gSHxTcERhWn1WeQ==;Mgo+DSMBPh8sVXJ1S0d+X1ZPckBBXXxLflF1VWJbdVtyflBGcC0sT3RfQF5jTX5Qd0djX35cc3BSTw==;ORg4AjUWIQA/Gnt2VFhhQlJDfVtdXmNWfFN0RnNYfVR1dl9DYEwgOX1dQl9gSXpTdURhWXlfcndTQWk=;MTU5ODY2OEAzMjMxMmUzMTJlMzMzN2V4ZU0xRmNKYWZkTGU4eUcvL2dJeDVCaGFjT2UzaFRaU3dSMXRrbVlFakk9;MTU5ODY2OUAzMjMxMmUzMTJlMzMzN2pkK1RMbGJkYUZKWFl2dWRwRGRHM2ZYOFhWS002Z3Jlc0JVUndkN1NVcGM9;NRAiBiAaIQQuGjN/V0d+XU9HcVRGQmBJYVF2R2BJflx6cVdMZVxBNQtUQF1hSn5XdkZiW39YcXZQT2NY;MTU5ODY3MUAzMjMxMmUzMTJlMzMzN0JDM3RZL0VZVGFydWg0eG5USXp5YjRnY2tlSC9uaXJxZEN6OGppSHVzOWs9;MTU5ODY3MkAzMjMxMmUzMTJlMzMzN2lxc3ZZbkJMK05JdFpHM0ZYcitHbU5ldWk3RkFxTmVQK1RRaExpNzZvQlk9;Mgo+DSMBMAY9C3t2VFhhQlJDfVtdXmNWfFN0RnNYfVR1dl9DYEwgOX1dQl9gSXpTdURhWXlfcnJQTmQ=;MTU5ODY3NEAzMjMxMmUzMTJlMzMzN2ZuZzJkUG9WNVpRWUZxTUo0a0pLWUpnYTRnNmx1bWxvZzVyZmxFSEtjaVE9;MTU5ODY3NUAzMjMxMmUzMTJlMzMzN2xMQkNxdVFuN1ppUTZKRmwrUkRKVklNKytjVkJlUGg3c3JEZmpBMHBOaW89;MTU5ODY3NkAzMjMxMmUzMTJlMzMzN0JDM3RZL0VZVGFydWg0eG5USXp5YjRnY2tlSC9uaXJxZEN6OGppSHVzOWs9');

/**
 * Sample for local data
 */
interface dataObj {
    x: Date,
    open: string,
    high: string,
    low: string,
    close: string,
    volume: string
}

const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
         .charts {
             align :center
         }`;

export let tooltipRender = (args) => {

    if (args.text.split('<br/>')[4]) {
        let target = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
        let value = (target / 100000000).toFixed(1) + 'B';
        args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
    }
};
function Marketchart() {

    const [cPrice, setCPrice] = useState<dataObj[]>([])
    const Price = async () => {
        const response = await fetch(
            "https://public.coindcx.com/market_data/candles?pair=B-BTC_USDT&interval=1m",
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
    console.log(cPrice);

    useEffect(() => {
        let interval = setInterval(() => {
            Price();
        }, 13000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <StockChartComponent id='stockchartdefault' primaryXAxis={{
                        valueType: 'DateTime',
                        majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
                        crosshairTooltip: { enable: true }
                    }} primaryYAxis={{
                        labelFormat: 'n0',
                        lineStyle: { width: 0 }, rangePadding: 'None',
                        majorTickLines: { width: 0 }
                    }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true }} tooltipRender={tooltipRender} crosshair={{ enable: true }} load={load.bind(this)} title='BitCoin'>
                        <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
                            EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
                            AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
                        <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective dataSource={cPrice} xName="x" high="high" low="low"
                                open="open"
                                close="close" type='Candle' animation={{ enable: true }}>
                            </StockChartSeriesDirective>
                        </StockChartSeriesCollectionDirective>
                    </StockChartComponent>
                </div>
            </div></>);
    function load(args) {

    }
}
export default Marketchart;

