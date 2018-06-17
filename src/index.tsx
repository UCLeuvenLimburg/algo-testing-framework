import React from 'react';
import ReactDOM from 'react-dom';

import { createShell } from './shell';
import { App } from './view';

import { IChapter } from './chapter';

export { Score } from './score';
export { IChapter, ISection } from './chapter';
export { IFunctionRepository, fromWindow as createFunctionRepositoryFromWindow } from './function-repository';


import * as InterpretationExercise from './sections/exercises/interpretation';
import * as TestBasedCodingExercise from './sections/exercises/coding';
import * as ReferenceImplementationBasedCodingExercise from './sections/exercises/by-reference-implementation';
import * as CarSimulatingExercise from './sections/exercises/car-exercise';

export const Exercise = {
    Interpretation: InterpretationExercise,
    Coding: {
        TestBased: TestBasedCodingExercise,
        ReferenceImplementationBased : ReferenceImplementationBasedCodingExercise
    },
    CarSimulation: CarSimulatingExercise
};

export { build as createExplanations } from './sections/explanations';

import * as JsxFormatters from './formatters/jsx-formatters';
import * as StringFormatters from './formatters/string-formatters';

export const Formatters = {
    Jsx: JsxFormatters,
    String: StringFormatters
};

import * as Functional from './function-util';
export { Functional };

import * as Assertions from './assertions';
export { Assertions };

import { loadImage } from './bitmap';
export const Imaging = {
    loadImage
};

import * as CarSimulation from './car-simulation';
export { CarSimulation };

export async function initialize(chapter : IChapter)
{
    (window as any).shell = createShell(chapter);
    
    ReactDOM.render(<App chapter={chapter} />, document.getElementById('app'));
}
