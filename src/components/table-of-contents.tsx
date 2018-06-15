import React from 'react';
import { Score } from '../score';
import { ISection, selectScoredSections } from '../chapter';
import './table-of-contents.scss';
import { ScoreViewer } from '../components/score-viewer';


export interface IProps
{
    sections : ISection[];
    onSectionSelected : (index : number, section : ISection) => void;
}

export interface IState
{
    selectedIndex : number;
}

export class TableOfContents extends React.Component<IProps, IState>
{
    constructor(props : IProps)
    {
        super(props);

        this.state = { selectedIndex: 0 };
    }

    render()
    {
        const me = this;

        return (
            <table className="toc">
                <tbody>
                    {this.props.sections.map(createRow)}
                    {createTotal()}
                </tbody>
            </table>
        );


        function createTotal()
        {
            return (
                <tr className="total" key="total">
                    <td className="caption">
                        Total
                    </td>
                    <td>
                        <ScoreViewer score={computeTotal()} />
                    </td>
                </tr>
            );


            function computeTotal()
            {
                return Score.summate( ...selectScoredSections(me.props.sections).map(section => section.score) );
            }
        }

        function createRow(section : ISection, index : number)
        {
            return (
                <tr className={determineClass()} key={`toc-entry-${index}`}>
                    {createCaption()}
                    {createScore()}
                </tr>
            );


            function determineClass()
            {
                const result = [ 'section' ];

                if ( index === me.state.selectedIndex )
                {
                    result.push('active');
                }

                return result.join(' ');
            }

            function createCaption()
            {
                return (
                    <td className="caption" onClick={() => me.onClick(index, section)}>
                        {section.tocEntry}
                    </td>
                );
            }

            function createScore()
            {
                if ( section.isScored() )
                {
                    return (
                        <td className="score">
                            <ScoreViewer score={section.score} />
                        </td>
                    );
                }
                else
                {
                    return <React.Fragment />;
                }
            }
        }
    }

    private onClick(index : number, section : ISection)
    {
        this.setState( { selectedIndex: index } );
        this.props.onSectionSelected(index, section);
    }
}