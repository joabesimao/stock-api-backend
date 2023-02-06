/* export abstract class View<T> {
  protected element: HTMLElement;

  constructor(select: string) {
    this.element = document.querySelector(select);
  }
  public update(model: T): void {
    let template = this.template(model);

    this.element.innerHTML = template;
  }
  protected abstract template(model: T): string;
} */
