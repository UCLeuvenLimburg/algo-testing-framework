import { ISection } from "testing-library/chapter";
import { Score } from 'testing-library/score';


export interface IChapter
{
    readonly title : string;

    readonly sections : ISection[];
}

export interface ISection
{
    readonly tocEntry: JSX.Element;

    readonly content : JSX.Element;

    isScored() : this is IScoredSection;
}

export interface IScoredSection extends ISection
{
    readonly id : string;
    
    readonly score : Score;
}

export function selectScoredSections(sections : ISection[]) : IScoredSection[]
{
    const result : IScoredSection[] = [];

    for ( let section of sections )
    {
        if ( section.isScored() )
        {
            result.push(section);
        }
    }

    return result;
}
