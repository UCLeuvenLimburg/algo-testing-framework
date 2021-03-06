/// <reference types="react" />
import { ISection } from '../chapter';
import { IHasDifficulty, difficulty } from '../difficulty';
import { IScored, Score } from '../score';
export declare abstract class ExerciseSection implements ISection, IHasDifficulty, IScored {
    abstract readonly score: Score;
    abstract readonly id: string;
    abstract readonly difficulty: difficulty;
    abstract readonly caption: string;
    protected abstract readonly header: JSX.Element;
    protected abstract readonly exerciseContent: JSX.Element;
    get content(): JSX.Element;
    get tocEntry(): JSX.Element;
    isScored(): this is IScored;
    hasDifficulty(): this is IHasDifficulty;
    protected get htmlClasses(): string[];
    protected renderDifficultyViewer(): JSX.Element;
}
