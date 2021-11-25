import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faGrinAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IUser } from "../interfaces/user.interface";

export class CustomizedAxisTick extends React.Component {
    render() {
        const { x, y, payload } = this.props as any;
        let firstWord: string = '';
        let rest: string[] = [];

        if (payload.value.length > 8) {
            [firstWord, ...rest] = payload.value.split(' ');
        } else {
            firstWord = payload.value;
        }

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={12} fill="#666">
                    <tspan textAnchor="middle" x="0">{firstWord}</tspan>
                    <tspan textAnchor="middle" x="1" dy="20">{rest.join(' ')}</tspan>
                    {/* <tspan textAnchor="middle" x="1" dy="20">{payload.value}</tspan> */}
                </text>
            </g>
        );
    }
};

export const data = [
    {
        name: 'Low Risk Business',
        uv: 4000,
        pv: 910,
        amt: 2400,
    },
    {
        name: 'Average Business',
        uv: 3000,
        pv: 645,
        amt: 2210,
    },
    {
        name: 'NC IDEA',
        uv: 2000,
        pv: 555,
        amt: 2290,
    }
];

export const barColors = ["#6CE5E8", "#42B8D5", "#2E3192"]

export const faCaretIcon = faCaretRight as Icon
export const faGrimBeamIcon = faGrinAlt as Icon

export const dataPieScale: IUser = {
    _id: 'dsadas',
    name: 'dasdas',
    image: 'dsadas',
    userText: 'dsadas',
    userNumber: 910
}