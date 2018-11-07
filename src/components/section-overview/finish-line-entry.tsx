import React from 'react';
import { Score } from 'score';
import styled from 'styled-components';
import { DifficultyViewer, InvisibleDifficultyViewer } from './difficulty-viewer';
import { ScoreViewer, InvisibleScoreViewer } from './score-viewer';
import { difficulty } from '../../difficulty';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-image: linear-gradient(45deg, black 25%, transparent 25%), linear-gradient(-45deg, black 25%, transparent 25%), linear-gradient(45deg, transparent 75%, black 75%), linear-gradient(-45deg, transparent 75%, black 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    height: 20px;
`;

interface IProps
{
    className?: string;
}

interface IState
{

}


/**
 * Section overview entry for finishing line.
 */
export class FinishLineEntry extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
    }

    render()
    {
        const me = this;

        return (
            <Container className={this.props.className}>
            </Container>
        );
    }
}