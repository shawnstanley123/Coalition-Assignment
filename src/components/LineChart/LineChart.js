// src/components/LineChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Select from 'react-select';
import  './LineChart.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { format, subMonths, subYears, isSameMonth, startOfMonth, endOfMonth } from 'date-fns';
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const generateLabels = (range) => {
    const today = new Date();
    let startDate;
    
    if (range === '6months') {
      startDate = subMonths(today, 6);
    } else if (range === '1year') {
      startDate = subYears(today, 1);
    }
  
    const labels = [];
    let currentDate = startOfMonth(startDate);
  
    while (currentDate <= today) {
      labels.push(format(currentDate, 'MMM yyyy'));
      currentDate = startOfMonth(currentDate);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  
    return labels;
  };
// Chart data and options




function LineChart({history,setSelectedPoint}) {
    const [currentRange, setCurrentRange] = useState('6months');
   
 
    const exampleData = [
        {
            month: 'March',
            year: 2024,
            blood_pressure: {
                systolic: {
                    value: 130,
                    levels: 'Normal' // Assuming a threshold for "Normal" and "Higher than Average"
                },
                diastolic: {
                    value: 85,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'February',
            year: 2024,
            blood_pressure: {
                systolic: {
                    value: 125,
                    levels: 'Normal'
                },
                diastolic: {
                    value: 90,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'January',
            year: 2024,
            blood_pressure: {
                systolic: {
                    value: 140,
                    levels: 'Higher than Average'
                },
                diastolic: {
                    value: 95,
                    levels: 'Higher than Average'
                }
            }
        },
        {
            month: 'December',
            year: 2023,
            blood_pressure: {
                systolic: {
                    value: 135,
                    levels: 'Higher than Average'
                },
                diastolic: {
                    value: 90,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'November',
            year: 2023,
            blood_pressure: {
                systolic: {
                    value: 145,
                    levels: 'Higher than Average'
                },
                diastolic: {
                    value: 85,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'October',
            year: 2023,
            blood_pressure: {
                systolic: {
                    value: 150,
                    levels: 'Higher than Average'
                },
                diastolic: {
                    value: 80,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'September',
            year: 2023,
            blood_pressure: {
                systolic: {
                    value: 120,
                    levels: 'Normal'
                },
                diastolic: {
                    value: 80,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'August',
            year: 2023,
            blood_pressure: {
                systolic: {
                    value: 125,
                    levels: 'Normal'
                },
                diastolic: {
                    value: 85,
                    levels: 'Normal'
                }
            }
        },
        {
            month: 'July',
            year: 2023,
            blood_pressure: {
                systolic: {
                    value: 130,
                    levels: 'Normal'
                },
                diastolic: {
                    value: 90,
                    levels: 'Normal'
                }
            }
        }
    ];
    
    
      // Create datasets using the aligned data
      const createChartData = (range) => {
        const labels = generateLabels(range);
       
        // Align data with labels
        const alignedSystolicData = labels.map((label) => {
            const [month, year] = label.split(' ');
    
            const entry = history.find(
                item => item.month.substring(0,3) === month && item.year.toString() === year
            );
            
            return entry ? entry.blood_pressure.systolic.value : null; // Handle missing data
        });
    
        const alignedDiastolicData = labels.map((label) => {
            const [month, year] = label.split(' ');
    
            const entry = history.find(
                item => item.month.substring(0,3) === month && item.year.toString() === year
            );
            
            return entry ? entry.blood_pressure.diastolic.value : null; // Handle missing data
        });
    
        return {
            labels: labels,
            datasets: [
                {
                    label: 'Systolic Blood Pressure',
                    data: alignedSystolicData,
                    fill: false,
                    borderColor: '#C26EB4',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: '#E66FD2', 
                    pointBorderColor: 'white',
                    pointBorderWidth: 1,
                    pointRadius: 5 
                },
                {
                    label: 'Diastolic Blood Pressure',
                    data: alignedDiastolicData,
                    fill: false,
                    borderColor: '#7E6CAB', // Color of the line
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Optional: color below the line
                    borderWidth: 2, // Line thickness
                    tension: 0.4, // Curved line
                    pointBackgroundColor: '#8C6FE6', // Color of the points
                    pointBorderColor: 'white', // Border color of the points
                    pointBorderWidth: 1, // Thickness of the point border
                    pointRadius: 5 // Size of the points
                }
            ],
        };
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
              display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `Systolic: ${context.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
            
              font: {
                  size: 14 // Font size for the x-axis title
                }
            },
            grid: {
              display: false // Removes the y-axis grid lines
            },
            ticks: {
              display: true,
              font: {
                  size: 8 // Font size for the x-axis labels
                } // Optionally, you can still display the y-axis labels
            }
          },
          y: {
            title: {
              display: true,
              
            },
            ticks: {
              display: true,
              font: {
                  size: 8 // Font size for the x-axis labels
                } // Optionally, you can still display the y-axis labels
            }
          }
        },
        onClick: (event, elements, chart) => {
            if (elements.length > 0) {
              const { datasets, labels } = chart.data;
              const { datasetIndex, index } = elements[0];
              const label = labels[index];
              const value = datasets[datasetIndex].data[index];
      
              // Find the entry corresponding to the clicked point
              const [month, year] = label.split(' ');
              const entry = history.find(
                (item) =>
                  item.month.substring(0, 3) === month && item.year.toString() === year
              );
      
              if (entry) {
                setSelectedPoint({
                  month: entry.month,
                  year: entry.year,
                  systolic: entry.blood_pressure.systolic,
                  diastolic: entry.blood_pressure.diastolic,
                });
      
                console.log('Selected Point:', {
                  month: entry.month,
                  year: entry.year,
                  systolic: entry.blood_pressure.systolic,
                  diastolic: entry.blood_pressure.diastolic,
                });
              }
            }
          },
      };
   
      const handleRangeChange = (event) => {
        setCurrentRange(event.target.value);
      };
    
  return (
    <div>
   <div className="button-group d-flex align-items-center justify-content-between px-4 mb-3">
    <div className='text-semibold-14'>Blood Pressure</div>
    <select
    value={currentRange}
    onChange={handleRangeChange}
    className="dropdown-select text-regular-12"
    >
      <option value="6months">Last 6 Months</option>
      <option value="1year">Last 1 Year</option>
    </select>
        {/* <button
        
          className={`btn ${currentRange === '6months' ? 'active' : ''}`}
          onClick={() => handleRangeChange('6months')}
        >
          Last 6 Months
        </button>
        <button
          className={`btn ${currentRange === '1year' ? 'active' : ''}`}
          onClick={() => handleRangeChange('1year')}
        >
          Last 1 Year
        </button> */}
      </div>
      <Line data={createChartData(currentRange)}  options={options} />
      
    </div>
  );
}

export default LineChart;
