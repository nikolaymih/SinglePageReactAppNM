import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IUserArray } from '../../interfaces/user.interface';
import { getUserDataService } from '../../service/user.service';
import { ReferenceBoard } from '../ReferenceBoard/ReferenceBoard';
import { Cell, PieChart, Pie } from 'recharts';

import { dataPieScale } from '../../constants/main.constants';

import { ScoreBoard } from '../ScoreBoard/ScoreBoard';

import './Main.css';

const Main = () => {
    let [dataUser, setData] = useState<IUserArray>([{
        _id: '',
        name: '',
        image: '',
        userText: '',
        userNumber: 0
    }])

    const location = useLocation().pathname;

    useEffect(() => {
        async function fetchUser() {
            const userData: IUserArray = await getUserDataService(location);
            console.log(userData);

            setData(() => {
                dataPieScale.userNumber = 910 - userData[0].userNumber;
                const userDataWithScale = [...userData, dataPieScale];

                return userDataWithScale;
            });
        }
        fetchUser();
    }, [location])

    return (
        <>
            <ReferenceBoard {...dataUser} />

            {/* For some reason pie chart does not render inside of this component
             <ScoreBoard {...dataUser} /> */}

            <section className="referenceValues">
                <p className="referenceValuesTitle">
                    <b>Your Cybersecurity Vurnerability Score </b>
                </p>
                <article className="overallVurnerability">
                    <article className="pieChart">
                        <p style={{ fontSize: '25px' }}><b>Your Score</b></p>
                        <PieChart width={250} height={300} >
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
                                startAngle={200}
                                endAngle={-20}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#CCC"
                                paddingAngle={0}
                                dataKey="userNumber"
                                blendStroke
                            >
                                <Cell
                                    key="test"
                                    fill="#2196F3"
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