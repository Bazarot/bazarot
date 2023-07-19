import React, { useState, useEffect } from "react";
import style from './Lines.module.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Lines = () =>{
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() =>{
        setChartData({
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets:[
                {
                    label: 'Users',
                    data: [95, 84, 80, 81, 6, 15, 140, 259, 380, 81, 56, 15, 50],
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(0, 160, 8)',
                    backgroundColor: '#1a1a1a',
                    pointerRadius: 2,
                    pointerBorderColor: 'rgb(52, 143, 53)',
                    pointerBackgroundColor: 'rgb(53, 103,12)',
                },
                {
                    label: 'companies',
                    data: [3, 5, 12, 26, 68, 78, 40, 97, 100, 81, 6, 5, 140],
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(0, 20, 136)',
                    backgroundColor: '#f79a6b',
                    pointerRadius: 2,
                    pointerBorderColor: 'rgb(52, 143, 53)',
                    pointerBackgroundColor: 'rgb(53, 103,12)',
                },
                {
                    label: 'products',
                    data: [10, 3, 5, 14, 96, 27, 40, 59, 80, 81, 56, 55, 40],
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(255, 238, 0)',
                    backgroundColor: '#f1580c',
                    pointerRadius: 2,
                    pointerBorderColor: 'rgb(52, 143, 53)',
                    pointerBackgroundColor: 'rgb(53, 103,12)',
                },
            ]
        })
        setChartOptions({
            plugins:{
                legend:{
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Total Users = '+'x',
                    // text: 'Total Users = '+'Users.length',
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])
    return(
        <>
            <div className={style.container}>
                <Line data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}
export default Lines;