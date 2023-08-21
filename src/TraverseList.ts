// "page" | "step" | "location" | "date" | "time" | "false" | "true"

class TraverseList extends HTMLElement {
  protected _currentSelectedItem: number
  protected _indexPointer: number
  protected menuItems: NodeListOf<HTMLElement>
  protected _current: string
  private readonly _loopable: boolean

  constructor() {
    super()
    this._indexPointer = 0
    this.menuItems = this.querySelectorAll(`[role="menuitem"]`)
    this._current = this.getAttribute("current") || "true"
    this._loopable = this.getAttribute("loopable") !== "false"
    this._currentSelectedItem = -1
  }

  connectedCallback(): void {
    this.addEventListeners()
  }

  disconnectedCallback(): void {
    this.removeEventListeners()
  }

  protected addEventListeners(): void {
    this.menuItems.forEach((item) => item.addEventListener("keydown", this.navigateKeys.bind(this)))
  }

  protected removeEventListeners(): void {
    this.menuItems.forEach((item) => item.removeEventListener("keydown", this.navigateKeys.bind(this)))
  }

  private navigateKeys(event: KeyboardEvent): void {
    console.log(event.key)
    if (event.key === "ArrowUp" || event.key === "ArrowLeft" || (event.shiftKey && event.key === "Tab")) {
      event.preventDefault()
      this.moveSelectionUp()
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight" || (!event.shiftKey && event.key === "Tab")) {
      event.preventDefault()
      this.moveSelectionDown()
    }
  }

  private moveSelectionUp(): void {
    this.menuItems[this._indexPointer].removeAttribute("aria-current")
    if (this._loopable || this._indexPointer > 0) {
      this._indexPointer = (this._indexPointer - 1 + this.menuItems.length) % this.menuItems.length
    }
    this.markAsCurrent()
  }

  private moveSelectionDown(): void {
    this.menuItems[this._indexPointer].removeAttribute("aria-current")
    if (this._loopable || this._indexPointer < this.menuItems.length - 1) {
      this._indexPointer = (this._indexPointer + 1) % this.menuItems.length
    }
    this.markAsCurrent()
  }

  private markAsCurrent(): void {
    this.menuItems[this._indexPointer].setAttribute("aria-current", this._current)
    this.menuItems[this._indexPointer].focus()
  }
}

customElements.define("traverse-list", TraverseList)
