export interface Posts {
    readonly userId: number
    readonly id: number
    readonly title: string;
    readonly body: string;
    readonly pinned: boolean
  }