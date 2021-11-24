import { useState, useEffect } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { getUserDataService } from '../../service/user.service';

import { BarChart, Bar, XAxis, Cell, ResponsiveContainer, LabelList, PieChart, Pie } from 'recharts';
import { barColors, CustomizedAxisTick, data } from '../../constants/main.constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faGrinAlt } from '@fortawesome/free-solid-svg-icons'

import './Main.css';

const faCaretIcon = faCaretRight as Icon
const faGrimBeamIcon = faGrinAlt as Icon

const dataPie = [
    { name: 'value', value: 550 }
];

let renderLabel = function (entry: { value: number; }) {
    return entry.value;
}

const Main = () => {
    // let [data, setData] = useState<IUser>({
    //     _id: '',
    //     name: '',
    //     image: '',
    //     userText: '',
    //     userNumber: 0
    // })

    // useEffect(() => {
    //     async function fetchUser() {
    //         const userData = await getUserDataService();

    //         setData(userData);
    //     }
    //     fetchUser();
    // }, [data])

    return (
        <>
            <section className="referenceValues">
                <p className="referenceValuesTitle">
                    <b>Overall Cybersecurity Vurnerability: How do you compare? </b>
                </p>
                <article className="overallVurnerability">
                    <article className="graphValues">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={400}
                                height={250}
                                data={data}
                                barCategoryGap={2}
                                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                            >
                                <XAxis dataKey="name" axisLine={false} width={150} tick={<CustomizedAxisTick />} tickSize={-1} />
                                <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 0, 0]}>
                                    <LabelList dataKey="pv" position="top" fill="black" />
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </article>
                    <article className="userResult">
                        <fieldset className="fieldset">
                            <legend className="legend">How are you doing?</legend>
                            <article className="howRUDoing">
                                <p className="arrowContainer"><FontAwesomeIcon className="arrow" icon={faCaretIcon} /></p>
                                <div className="scale">
                                    <p>
                                        Great!&nbsp;
                                        <FontAwesomeIcon icon={faGrimBeamIcon} />
                                        <FontAwesomeIcon icon={faGrimBeamIcon} />
                                    </p>
                                    <p>
                                        Good&nbsp;
                                        <FontAwesomeIcon icon={faGrimBeamIcon} />
                                    </p>
                                    <p>AT RISK!</p>
                                </div>
                            </article>
                            <p>
                                You are at <b>significantly more risk</b> <br></br> that other businesses in your area
                            </p>
                        </fieldset>
                    </article>
                </article>
            </section >
            <section className="referenceValues">
                <p className="referenceValuesTitle">
                    <b>Overall Cybersecurity Vurnerability Score </b>
                </p>
                <article className="overallVurnerability">
                    <article className="pieChart">
                        <p style={{ fontSize: '25px' }}><b>Your Score</b></p>
                        <PieChart width={250} height={250} >
                            <Pie
                                label={renderLabel}
                                data={dataPie}
                                cx={120}
                                cy={100}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#2196F3"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {/* <LabelList className="labelList" dataKey="value" position="end" fill="black" /> */}
                                <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
                                    Donut
                                </text>
                            </Pie>
                        </PieChart>
                    </article>
                    <article className="businessInformation">
                        <h3>
                            What this means<br></br>to your business
                        </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,<br></br>
                            reprehenderit. Laudantium, dolores iure? Qui vero, nemo minima explicabo,<br></br>
                            tempora neque fugiat molestiae perferendis, error libero consequatur.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem exercitationem labore,<br></br>
                            numquam eius ad distinctio architecto sed sunt fuga cupiditate optio nemo!<br></br>
                            Dignissimos est omnis aliquid consectetur sapiente, voluptatem nihil!
                        </p>
                        <button className="scoreBtn">
                            Tell me more about my score
                        </button>
                    </article>
                </article>
            </section>
        </>
    )
}

export default Main;