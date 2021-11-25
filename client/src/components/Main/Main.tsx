import { useState, useEffect } from 'react';
import { IUserArray } from '../../interfaces/user.interface';
import { getUserDataService } from '../../service/user.service';

import { BarChart, Bar, XAxis, Cell, ResponsiveContainer, LabelList, PieChart, Pie } from 'recharts';
import { barColors, CustomizedAxisTick, data, dataPieScale, faCaretIcon, faGrimBeamIcon } from '../../constants/main.constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Main.css';

const Main = () => {
    let [dataUser, setData] = useState<IUserArray>([{
        _id: '',
        name: '',
        image: '',
        userText: '',
        userNumber: 0
    }])

    useEffect(() => {
        async function fetchUser() {
            const userData: IUserArray = await getUserDataService();

            setData(() => {
                dataPieScale.userNumber = 910 - userData[0].userNumber;
                const userDataWithScale = [...userData, dataPieScale,];
                console.log(userDataWithScale);

                return userDataWithScale;
            });
        }
        fetchUser();
    }, [])

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
                                <p className=
                                    {`${'arrowContainer'}
                                    ${dataUser[0].userNumber < 555 && dataUser[0].userNumber > 0
                                            ? 'positionArrowAtEnd'
                                            : dataUser[0].userNumber < 645 && dataUser[0].userNumber > 555
                                                ? 'positionArrowMiddle'
                                                : 'positionArrowOnTop'}`
                                    }>
                                    <FontAwesomeIcon className="arrow" icon={faCaretIcon} />
                                </p>
                                <div className="scale">
                                    <p className={dataUser[0].userNumber > 645 ? 'activeResult' : 'notActiveResult'}>
                                        Great!&nbsp;
                                        <FontAwesomeIcon icon={faGrimBeamIcon} />
                                        <FontAwesomeIcon icon={faGrimBeamIcon} />
                                    </p>
                                    <p className={dataUser[0].userNumber > 555 && dataUser[0].userNumber <= 645 ? 'activeResult' : 'notActiveResult'}>
                                        Good&nbsp;
                                        <FontAwesomeIcon icon={faGrimBeamIcon} />
                                    </p>
                                    <p className={dataUser[0].userNumber < 555 && dataUser[0].userNumber > 0 ? 'activeResult' : 'notActiveResult'}>AT RISK!</p>
                                </div>
                            </article>
                            {dataUser[0].userNumber < 555 && dataUser[0].userNumber > 0
                                ? <p>
                                    You are at <b>significantly more risk</b> <br></br> than other businesses in your area
                                </p>
                                : <p>
                                    You are at <b>significantly better</b> <br></br> than other businesses in your area
                                </p>
                            }
                        </fieldset>
                    </article>
                </article>
            </section >
            <section className="referenceValues">
                <p className="referenceValuesTitle">
                    <b>Your Cybersecurity Vurnerability Score </b>
                </p>
                <article className="overallVurnerability">
                    <article className="pieChart">
                        <p style={{ fontSize: '25px' }}><b>Your Score</b></p>
                        <PieChart width={250} height={250} >
                            <text
                                x={120}
                                y={110}
                                fontSize={30}
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                {dataUser[0].userNumber}
                            </text>
                            <Pie
                                data={dataUser}
                                cy={80}
                                startAngle={-20}
                                endAngle={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#2196F3"
                                paddingAngle={0}
                                dataKey="userNumber"
                                blendStroke
                            >
                                <Cell
                                    key="test"
                                    fill="#CCC"
                                />
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