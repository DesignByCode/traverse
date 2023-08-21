declare class TraverseList extends HTMLElement {
    protected _currentSelectedItem: number;
    protected _indexPointer: number;
    protected menuItems: NodeListOf<HTMLElement>;
    protected _current: string;
    private readonly _loopable;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected addEventListeners(): void;
    protected removeEventListeners(): void;
    private navigateKeys;
    private moveSelectionUp;
    private moveSelectionDown;
    private markAsCurrent;
}
