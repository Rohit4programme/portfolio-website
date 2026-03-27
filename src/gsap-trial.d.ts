declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, config?: any);
    revert(): void;
    split(config?: any): void;
    chars: any[];
    words: any[];
    lines: any[];
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config?: any): ScrollSmoother;
    static refresh(hard?: boolean): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    scrollTo(target: string | number, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}
