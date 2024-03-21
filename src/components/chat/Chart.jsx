import { LineChart, Line } from 'recharts';

const Chart = () => {

     const mathMarksData = [
        { id: 1, name: "Alice", math_mark: 85 },
        { id: 2, name: "Bob", math_mark: 78 },
        { id: 3, name: "Charlie", math_mark: 92 },
        { id: 4, name: "David", math_mark: 68 },
        { id: 5, name: "Eve", math_mark: 76 },
        { id: 6, name: "Frank", math_mark: 88 },
        { id: 7, name: "Grace", math_mark: 95 },
        { id: 8, name: "Henry", math_mark: 82 },
        { id: 9, name: "Ivy", math_mark: 70 },
        { id: 10, name: "Jack", math_mark: 90 }
    ];
    
    return (
        <div>
        <LineChart width={400} height={400} data={mathMarksData}>
        <Line type="" dataKey="math_mark" stroke='yellow'></Line>
        </LineChart>
        
        </div>
    );
};

export default Chart;