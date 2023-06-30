import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Sector } from 'recharts';
import style from './ManageSale.module.css'

const ManageSale = () => {
    const timeData = [
        {
            name: '16시',
            오늘: 4000,
            어제: 2400,
        },
        {
            name: '17시',
            오늘: 3000,
            어제: 1398,
        },
        {
            name: '18시',
            오늘: 2000,
            어제: 9800,
        },
        {
            name: '19시',
            오늘: 2780,
            어제: 3908,
        },
        {
            name: '20시',
            오늘: 1890,
            어제: 4800,
        },
    ];

    const dayData = [
        {
            name: '월',
            이번주: 4000,
            지난주: 2400,
        },
        {
            name: '화',
            이번주: 3000,
            지난주: 1398,
        },
        {
            name: '수',
            이번주: 2000,
            지난주: 9800,
        },
        {
            name: '목',
            이번주: 2780,
            지난주: 3908,
        },
        {
            name: '금',
            이번주: 1890,
            지난주: 4800,
        },
        {
            name: '토',
            이번주: 2580,
            지난주: 4800,
        },
        {
            name: '일',
            이번주: 7430,
            지난주: 3490,
        },
    ];

    const data = [
        {
            name: '음식1',
            재주문: 4000,
            신규주문: 2400,
            주소없음: 2400,
        },
        {
            name: '음식2',
            재주문: 3000,
            신규주문: 1398,
            주소없음: 2210,
        },
        {
            name: '음식3',
            재주문: 2000,
            신규주문: 9800,
            주소없음: 2290,
        },
        {
            name: '음식4',
            재주문: 2780,
            신규주문: 3908,
            주소없음: 2000,
        },
        {
            name: '음식5',
            재주문: 1890,
            신규주문: 4800,
            주소없음: 2181,
        },
        {
            name: '음식6',
            재주문: 2390,
            신규주문: 3800,
            주소없음: 2500,
        },
        {
            name: '음식7',
            재주문: 3490,
            신규주문: 4300,
            주소없음: 2100,
        },
    ];

    const pieData = [
        { name: '음식1', value: 700 },
        { name: '음식2', value: 300 },
        { name: '음식3', value: 300 },
        { name: '음식4', value: 200 },
    ];

    const total = pieData.reduce((sum, data) => sum + data.value, 0);

    const pieDataWithPercentage = pieData.map(data => ({
        ...data,
        percentage: ((data.value / total) * 100).toFixed(2),
    }));

    const COLORS = ['#604EF8', '#8377E9', '#9F93EA', '#DDD1EE'];

    return (
        <div className={style.mainContainer}>
            <div>
                <div className={style.todaySales}>사장님,<br />오늘 매출은 550,000원 입니다.</div>
                <div className={style.salesChartContainer}>
                    <div>
                        <div>시간별 매출</div>
                        <div className={style.salesChart}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={593}
                                    height={289}
                                    data={timeData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="오늘" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="어제" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div>
                        <div>요일별 매출</div>
                        <div className={style.salesChart}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={593}
                                    height={289}
                                    data={dayData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="이번주" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="지난주" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={style.todaySales}>월간 메뉴별 판매량</div>
                <div className={style.salesChartContainer}>
                    <div className={style.salesBarChart}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={593}
                                height={349}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="재주문" stackId="a" fill="#8884d8" />
                                <Bar dataKey="신규주문" stackId="a" fill="#82ca9d" />
                                <Bar dataKey="주소없음" stackId="a" fill="#F2F4F8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <PieChart width={260} height={349}>
                        <Pie
                            data={pieData}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className={style.percentage}>
                        {pieDataWithPercentage.map((entry, index) => (
                            <div key={`text-${index}`}>
                                {`${entry.name} ${entry.percentage}%`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageSale;