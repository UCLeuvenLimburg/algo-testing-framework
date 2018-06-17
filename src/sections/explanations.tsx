import React from 'react';
import { ISection, IScoredSection } from '../chapter';
import './explanations.scss';


class ExplanationSection implements ISection
{
    constructor(public readonly id : string, public readonly tocEntry : JSX.Element, public readonly header : JSX.Element, public readonly explanation : JSX.Element) { }

    isScored() : this is IScoredSection
    {
        return false;
    }

    get content() : JSX.Element
    {
        return (
            <section className="explanation">
                <header>
                    {this.header}
                </header>
                <div className="explanation-container">
                    {this.explanation}
                </div>
            </section>
        );
    }

    hasDifficulty() : boolean
    {
        return false;
    }
}

export function build(id : string, tocEntry : JSX.Element, header : JSX.Element, explanation : JSX.Element) : ISection
{
    return new ExplanationSection(id, tocEntry, header, explanation);
}