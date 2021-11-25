import { IUserArray } from '../../interfaces/user.interface';

import { BarChart, Bar, XAxis, Cell, ResponsiveContainer, LabelList, } from 'recharts';
import { barColors, CustomizedAxisTick, data, faCaretIcon, faGrimBeamIcon } from '../../constants/main.constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ReferenceBoard.css';

export const ReferenceBoard = (dataUser: IUserArray) => {

    return (
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
                                    <b>Great!&nbsp;</b>
                                    <FontAwesomeIcon icon={faGrimBeamIcon} />
                                    <FontAwesomeIcon icon={faGrimBeamIcon} />
                                </p>
                                <p className={dataUser[0].userNumber > 555 && dataUser[0].userNumber <= 645 ? 'activeResult' : 'notActiveResult'}>
                                    <b>Good&nbsp;</b>
                                    <FontAwesomeIcon icon={faGrimBeamIcon} />
                                </p>
                                <p className={dataUser[0].userNumber < 555 && dataUser[0].userNumber > 0 ? 'activeResult' : 'notActiveResult'}>
                                    <b>AT RISK!</b>
                                </p>
                            </div>
                        </article>
                        {dataUser[0].userNumber < 555 && dataUser[0].userNumber > 0
                            ? <p>
                                You are at <b>significantly more risk</b> <br></br> than other businesses in your area
                            </p>
                            : dataUser[0].userNumber > 555 && dataUser[0].userNumber <= 645
                                ? <p>
                                    You are <b>much better</b> than <br></br> other businesses in your area
                                </p>
                                : <p>
                                    You are <b>significantly better</b> <br></br> than other businesses in your area
                                </p>
                        }
                    </fieldset>
                </article>
            </article>
        </section >
    )
}



