import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, Cell, ResponsiveContainer, LabelList } from 'recharts';
import { barColors, CustomizedAxisTick, data } from '../../constants/main.constants';
import { IUser } from '../../interfaces/user.interface';
import { getUserDataService } from '../../service/user.service';

import './Main.css';

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
                <p>
                    <b>Overall Cybersecurity Vurnerability: How do you compare? </b>
                </p>
                <div className="overallVurnerability">
                    <article className="graphValues">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={400}
                                height={250}
                                data={data}
                                barCategoryGap={2}
                                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                            >
                                <XAxis dataKey="name"  axisLine={false} width={150} tick={<CustomizedAxisTick />} tickSize={-1} />
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
                        <p>article2</p>
                    </article>
                </div>
            </section >
            <section className="userValues">

            </section>
        </>
    )
}

export default Main;