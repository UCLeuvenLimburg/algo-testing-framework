import React from 'react';
import { IResult, IAssertion } from '../assertions';
import { Outcome } from '../outcome';
import { IToJsxElement, simple } from '../formatters/jsx-formatters';
import { deepEqual } from '../equality';
import { Maybe } from 'tsmonad';
import './unmodified.scss';


class UnmodifiedAssertion implements IAssertion
{
    constructor(private original : any, private formatter : IToJsxElement<any>) {  }

    check(actual : any) : IResult
    {
        return new UnmodifiedAssertionResult(this.original, actual, this.formatter);
    }
}

class UnmodifiedAssertionResult implements IResult
{
    constructor(private original : any, private actual : Maybe<any>, private formatter : IToJsxElement<any>) { }

    get result(): Outcome
    {
        return this.actual.caseOf({
            just: value => deepEqual(this.original, value) ? Outcome.Pass : Outcome.Fail,
            nothing: () => Outcome.Skip
        });
    }

    get content(): JSX.Element
    {
        return this.createTable();
    }

    private createTable() : JSX.Element
    {
        return (
            <React.Fragment>
                <p>
                    Value is expected to remain unmodified.
                </p>
                <table className="unmodified-assertion">
                    <tbody>
                        {this.createOriginalRow()}
                        {this.createActualRow()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
    
    private createOriginalRow() : JSX.Element
    {
        return (
            <tr key="original">
                <th>Original</th>
                <td>{this.formatter(this.original)}</td>
            </tr>
        );
    }
    
    private createActualRow() : JSX.Element
    {
        return this.actual.caseOf({
            just: value => (
                <tr key="actual">
                    <th>Actual</th>
                    <td>{this.formatter(value)}</td>
                </tr>
            ),
            nothing:  () => <React.Fragment />
        });
    }
}

export function createUnmodifiedAssertion(original : any, formatter ?: IToJsxElement<any>) : IAssertion
{
    return new UnmodifiedAssertion(original, formatter || simple);
}